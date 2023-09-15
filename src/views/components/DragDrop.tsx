import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { columnData, taskData } from "../../mockData";
import { CSS } from "@dnd-kit/utilities";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/reducer";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {
  setSelectTestData,
  setTestBlockData,
  setTestSuiteDetail,
} from "../../features/setupTestSlice";
import { useNavigate } from "react-router";

interface ColumnTypos {
  id: string;
  title: string;
}

export interface TaskTypos {
  id: string;
  title: string;
  columnId: string;
}

const DragDrop = (): ReactElement => {
  const [columnDatas, setColumnDatas] = useState<ColumnTypos[]>(columnData);
  const [taskDatas, setTaskDatas] = useState<TaskTypos[]>(taskData);
  const [activeTask, setActiveTask] = useState<TaskTypos | null>(null);
  const [activeColumn, setActiveColumn] = useState<ColumnTypos | null>(null);
  const theme = useTheme<any>();

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { selectTestSuite } = useSelector((state: AppState) => state.setupTest);

  useEffect(() => {
    initialTaskColumn("absent");
  }, []);

  const initialTaskColumn = (newColumnId: string) => {
    const updatedTaskData = taskData.map((task) => ({
      ...task,
      columnId: newColumnId,
    }));
    setTaskDatas(updatedTaskData);
  };

  const columnId = columnDatas.map((col: ColumnTypos) => col.id);

  const dragStart = (event: DragStartEvent) => {
    if (event?.active?.data?.current?.type === "Task") {
      setActiveTask(event.active.data.current?.taskData);
    }
  };

  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0, // 300px
      },
    })
  );

  const dragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    if (isActiveTask && isOverTask) {
      setTaskDatas((task) => {
        const activeIndex = task.findIndex((t) => t.id === activeId);
        const overIndex = task.findIndex((t) => t.id === overId);
        task[activeIndex].columnId = task[overIndex].columnId;
        return arrayMove(task, activeIndex, overIndex);
      });
    }

    const isOverColumn = over.data.current?.type === "Column";
    if (isActiveTask && isOverColumn) {
      setTaskDatas((task) => {
        const activeIndex = task.findIndex((t) => t.id == activeId);
        task[activeIndex].columnId = overId as string;
        return arrayMove(task, activeIndex, activeIndex);
      });
    }
  };

  return (
    <Stack spacing={4} width="100%">
      <DndContext
        onDragStart={dragStart}
        sensors={sensor}
        onDragOver={dragOver}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            p: "1rem",
            pb: "1.5rem",
            flexWrap: "wrap",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <SortableContext items={columnId}>
            {columnDatas.map((col: ColumnTypos) => {
              const filterTask = taskDatas.filter(
                (task: TaskTypos) => task.columnId == col.id
              );
              const disableSorting = col.id === activeColumn?.id;

              return (
                <ColumnContainer
                  key={col.id}
                  colData={col}
                  taskData={filterTask}
                  disableSorting={disableSorting}
                />
              );
            })}
          </SortableContext>
        </Box>
        {createPortal(
          <DragOverlay>
            {activeTask ? <TaskCard taskData={activeTask} /> : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <Divider orientation="horizontal" />
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ pb: "1rem" }}
      >
        <Button
          variant="contained"
          onClick={() => dispatch(setSelectTestData(null))}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setTestSuiteDetail(selectTestSuite));
            dispatch(setTestBlockData(taskDatas));
            navigate("/tests/setup-phase");
          }}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default DragDrop;

interface ColumnContProps {
  colData: ColumnTypos;
  taskData: TaskTypos[];
  disableSorting: boolean;
}

const ColumnContainer = (props: ColumnContProps): ReactElement => {
  const { colData, taskData, disableSorting } = props;
  const theme = useTheme<any>();
  const taskId = taskData.map((task: TaskTypos) => task.id);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: colData.id,
    data: {
      type: "Column",
      colData,
    },
    disabled: true,
  });

  return (
    <Stack key={colData.id} spacing={1} ref={setNodeRef}>
      <Typography variant="body1">{colData.title}</Typography>
      <Box
        {...attributes}
        {...listeners}
        sx={{
          height: "20rem",
          width: "15rem",
          ...theme.typography.darkModeBg3,
          display: "flex",
          flexDirection: "column",
          py: "0.4rem",
          px: "0.7rem",
          gap: "1rem",
        }}
      >
        <SortableContext items={taskId}>
          {taskData.map((task: TaskTypos) => {
            return <TaskCard key={task.id} taskData={task} />;
          })}
        </SortableContext>
      </Box>
    </Stack>
  );
};

interface TaskCardProps {
  taskData: TaskTypos;
}
const TaskCard = (props: TaskCardProps): ReactElement => {
  const { taskData } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: taskData.id,
    data: {
      type: "Task",
      taskData,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const dragginStyle = {
    transition,
    transform: CSS.Transform.toString(transform),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
    border: "2px solid #2196f3",
    height: "3rem",
    background: "#2196f3",
    cursor: "pointer",
  };

  if (isDragging) {
    return <Box style={dragginStyle} ref={setNodeRef}></Box>;
  }

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "3rem",
        background: "#2196f3",
        cursor: "pointer",
      }}
    >
      {taskData.columnId == "complete" ? (
        <Chip
          sx={{ color: "white", background: "transparent" }}
          color="success"
          icon={<CheckCircleOutlineOutlinedIcon />}
          label={taskData.title}
        />
      ) : (
        <Chip
          sx={{ color: "white", background: "transparent" }}
          color="success"
          label={taskData.title}
        />
      )}
    </Box>
  );
};

import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { DashboardNumCardTypos } from "../../views/dashboard/Default";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface DashCardNumProps {
  color?: string;
  fontStyle?: string;
  cardData: DashboardNumCardTypos;
}

const CustomDashboardNumCard = (props: DashCardNumProps): ReactElement => {
  const theme = useTheme<any>();

  const { color, fontStyle, cardData } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: cardData.id,
    data: {
      type: "DashboardNumCard",
      cardData,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const dragginStyle = {
    transition,
    transform: CSS.Transform.toString(transform),

    opacity: 0.9,
    border: "2px solid #2196f3",
    height: "9rem",
    width: "12rem",
    maxWidth: "18rem",
    display: "flex",
    flex: "2 0 auto",
    background: "#2196f3",
    borderRadius: "7px",
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
      sx={{
        ...theme.typography.dashboardCard,
        flex: "2 0 auto",
        height: "9rem",
        minWidth: "12rem",
        maxWidth: "18rem",
        display: "flex",
        flexDirection: "column",
        borderRadius: "7px",
        py: "0.5rem",
        pl: "0.5rem",
        cursor: "pointer",
      }}
      style={style}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".4rem",
          }}
        >
          <WidgetsOutlinedIcon color="primary" sx={{ fontSize: "2rem" }} />
          <Typography variant="h6" sx={{ fontSize: ".8rem" }}>
            {cardData?.heading}
          </Typography>
        </Box>
        <MoreVertOutlinedIcon
          sx={{ justifySelf: "flex-end", fontSize: "1.1rem" }}
        />
      </Box>

      <Box
        sx={{
          pr: "1.7rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            textAlign: "center",
            mr: "1.8rem",
            color: color ? color : "",
          }}
        >
          {cardData?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            left: "2.5rem",
            pb: "3rem",
            fontStyle: fontStyle ? fontStyle : "",
          }}
        >
          {cardData?.footer}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomDashboardNumCard;

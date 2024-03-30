import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Box, Popover, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { ReactElement } from "react";
import { DashboardNumCardTypos } from "../../views/dashboard/Default";
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

  // For Popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
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

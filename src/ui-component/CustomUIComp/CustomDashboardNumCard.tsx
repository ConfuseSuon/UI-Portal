import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

interface DashCardNumProps {
  color?: string;
  cardBody: string;
  cardFooter?: string;
  fontStyle?: string;
}

const CustomDashboardNumCard = (props: DashCardNumProps): ReactElement => {
  const theme = useTheme<any>();

  const { color, cardBody, cardFooter, fontStyle } = props;

  return (
    <Box
      sx={{
        ...theme.typography.dashboardCard,
        height: "9rem",
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        borderRadius: "7px",
        py: "0.5rem",
        pl: "0.5rem",
        ...theme.typography.dashboardCard,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
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
            Lorem Ipsum
          </Typography>
        </Box>
        <MoreVertOutlinedIcon
          sx={{ justifySelf: "flex-end", fontSize: "1.1rem" }}
        />
      </Box>

      <Box
        sx={{
          pr: "1.7rem",
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            textAlign: "center",
            mr: "1.8rem",
            color: color ? color : "",
          }}
        >
          {cardBody}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            position: "absolute",
            left: "2.5rem",
            bottom: "-.3rem",
            fontStyle: fontStyle ? fontStyle : "",
          }}
        >
          {cardFooter}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomDashboardNumCard;

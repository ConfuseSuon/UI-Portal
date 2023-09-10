import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";
import React, { ReactElement } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Props {
  setShowPopup?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenResultPopup?: React.Dispatch<React.SetStateAction<boolean>>;
  resultPage?: boolean;
}

export const expPieData = [
  {
    value: 80,
    name: "Pass",
  },
  {
    value: 70,
    name: "Fail",
  },
  {
    value: 60,
    name: "Rock",
  },
  {
    value: 50,
    name: "Hero",
  },
];

export const expcolorsofPieChart = ["#0076CE", "#1F305E", "#454b4b", "#0E3386"];

const CustomMyTestCard = (props: Props): ReactElement => {
  const { setShowPopup, setOpenResultPopup, resultPage } = props;
  const theme = useTheme<any>();
  return (
    <Box
      sx={{
        minHeight: "4.4rem",
        px: "1rem",
        ...theme.typography.darkModeBg3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        mb: "1rem",
      }}
    >
      <Typography>Advanced Chamdber 1.1</Typography>
      {resultPage ? (
        <Box sx={{ height: 50, width: 100 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="value"
                data={expPieData}
                innerRadius={8}
                outerRadius={20}
                cy={20}
              >
                {expPieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      expcolorsofPieChart[index % expcolorsofPieChart.length]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <Typography>Device</Typography>
      )}
      <Typography>Reserver Name</Typography>
      {resultPage ? (
        <Typography>Date</Typography>
      ) : (
        <Typography>Topology</Typography>
      )}
      <Stack direction="row" spacing={1}>
        <Chip
          sx={{ color: "white" }}
          icon={<CloudSyncOutlinedIcon />}
          label="In Progress"
          color="success"
        />
      </Stack>
      <Button
        variant="outlined"
        onClick={() => {
          setShowPopup && setShowPopup(true);
          setOpenResultPopup && setOpenResultPopup(true);
        }}
      >
        {" "}
        View
      </Button>
    </Box>
  );
};

export default CustomMyTestCard;

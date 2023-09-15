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
        py: ".5rem",
        ...theme.typography.dashboardCard,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        mb: "1rem",
        gap: "2rem",
      }}
    >
      <Box>
        <Typography sx={{ flex: "1 1 auto" }}>Advanced Chamdber 1.1</Typography>
      </Box>
      {resultPage ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "5 0 auto",
          }}
        >
          <ResponsiveContainer height={70} width={200}>
            <PieChart>
              <Pie
                dataKey="value"
                data={expPieData}
                innerRadius={8}
                outerRadius={30}
                cy={32}
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
        <Box>
          <Typography sx={{ flex: "1 1 auto" }}>Device</Typography>
        </Box>
      )}
      <Box>
        <Typography sx={{ flex: "1 1 auto" }}>Reserver Name</Typography>
      </Box>
      {resultPage ? (
        <Typography sx={{ flex: "1 1 auto" }}>Date</Typography>
      ) : (
        <Box>
          <Typography sx={{ flex: "1 1 auto" }}>Topology</Typography>
        </Box>
      )}
      <Stack direction="row" spacing={1} sx={{ flex: "1 1 auto" }}>
        <Chip
          sx={{ color: "white" }}
          icon={<CloudSyncOutlinedIcon />}
          label="In Progress"
          color="success"
        />
      </Stack>
      <Button
        sx={{ flex: "1 0 auto" }}
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

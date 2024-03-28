import {
  DeleteOutline,
  EditOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Table,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { ChangeEvent, useMemo, useState } from "react";
import CustomPagination from "../../../ui-component/CustomUIComp/CustomPagination";
import CustomTable from "../../../ui-component/CustomUIComp/CustomTable";

const AllTestCases = () => {
  const theme = useTheme<any>();

  const [page, setPage] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [maxResultCount, setMaxResultCount] = useState(10);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "type",
        // hidden: true,
      },
      {
        Header: "Runner",
        accessor: "runner",
        // hidden: true,
      },
      {
        Header: "Action",
        Cell: ({ row }: any) => {
          return (
            <Stack direction="row" alignItems={"center"} gap={".3rem"}>
              <EditOutlined
                sx={{ fontSize: "1rem", cursor: "pointer", color: "#2196f3" }}
              />
              <DeleteOutline
                sx={{ fontSize: "1rem", cursor: "pointer", color: "#2196f3" }}
              />
            </Stack>
          );
        },
      },
    ],
    []
  );

  const data = [
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
    {
      id: 58011,
      name: "LAT_5_80_S3_M4_C1_US",
      type: "Latency",
      runner: "Ixia",
    },
  ];

  // Pagination

  const putInTableFirstPage = () => {
    setPage(0);
    setSkipCount(0);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMaxResultCount(Number(event.target.value));
    putInTableFirstPage();
  };

  const handlePageChange = (event: any, value: number): void => {
    setSkipCount(maxResultCount * value);
    setPage(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h3" mb={"1rem"}>
            All Test Cases
          </Typography>
          <Box
            sx={{
              ...theme.typography.darkModeBg4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              minHeight: "5rem",
              px: "1rem",
              py: "0.7rem",
              borderRadius: "8px",
              gap: "1rem",
            }}
          >
            <Box display="flex" gap={"1rem"}>
              <Button variant="outlined" size="small">
                Selected Filter Tag 1
              </Button>
              <Button variant="outlined" size="small">
                Selected Filter Tag 2
              </Button>
            </Box>
            <TextField
              label="Search by name, suite or tag"
              size="small"
              id="filled-basic"
              type="search"
              InputProps={{
                startAdornment: <SearchOutlined sx={{ mr: ".5rem" }} />,
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <CustomTable data={data} columns={columns} />
        {/* <Card sx={{ mb: "1rem" }} elevation={1}>
          <CardContent sx={{ p: 2 }}>
            <Box>
              <CustomTable columns={columns} data={data} />
              <CustomPagination
                component={"div"}
                count={data?.length ?? 0}
                onPageChange={(event, value) => handlePageChange(event, value)}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={maxResultCount}
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
              />
            </Box>
          </CardContent>
        </Card> */}
      </Grid>
    </Grid>
  );
};

export default AllTestCases;

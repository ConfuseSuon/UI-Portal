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
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { ChangeEvent, useMemo, useState } from "react";
import { addPlaylistSelectData, allTestCaseTabledata } from "../../../mockData";
import CustomPagination from "../../../ui-component/CustomUIComp/CustomPagination";
import CustomSearch from "../../../ui-component/CustomUIComp/CustomSearch";
import CustomSelectOption from "../../../ui-component/CustomUIComp/CustomSelectOption";
import CustomTable from "../../../ui-component/CustomUIComp/CustomTable";
import { allTestCaseColumns } from "../../../utils/tableColumns";

const AllTestCases = () => {
  const theme = useTheme<any>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [page, setPage] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [maxResultCount, setMaxResultCount] = useState(10);

  // Search Feature

  const filteredTableData = useMemo(() => {
    if (searchTerm.length === 0) return allTestCaseTabledata;
    return allTestCaseTabledata?.filter((data) =>
      data?.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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
      <Grid item md={12} sm={12} xs={12}>
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
            <Box display="flex" gap={"1rem"} flexWrap="wrap">
              <CustomSelectOption
                name="Select filter"
                label="Select filter"
                options={addPlaylistSelectData}
                width="15rem"
              />
              <CustomSelectOption
                name="Select filter"
                label="Select filter"
                options={addPlaylistSelectData}
                width="15rem"
              />
            </Box>

            <CustomSearch
              label="Search by name, suite or tag"
              size="small"
              id="filled-basic"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchOutlined sx={{ mr: ".5rem" }} />,
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Card sx={{ mb: "1rem" }} elevation={1}>
          <CardContent sx={{ p: 2, ...theme.typography.darkModeBg4 }}>
            <Box>
              <CustomTable
                columns={allTestCaseColumns}
                data={filteredTableData}
              />
              {filteredTableData?.length > 0 ? (
                <CustomPagination
                  component={"div"}
                  count={allTestCaseTabledata?.length ?? 0}
                  onPageChange={(event, value) =>
                    handlePageChange(event, value)
                  }
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={maxResultCount}
                  rowsPerPageOptions={[5, 10, 15, 20, 25]}
                />
              ) : (
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", p: "4rem" }}
                >
                  No Data
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AllTestCases;

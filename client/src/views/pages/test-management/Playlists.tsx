import {
  Add,
  DeleteOutline,
  EditOutlined,
  ExpandLess,
  ExpandMore,
  SearchOutlined,
} from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Slide,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import { ErrorMessage, Form, Formik } from "formik";
import React, { ChangeEvent, Fragment, useId, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  addPlaylistSelectData,
  playlistMenuData,
  playlistTableData,
} from "../../../mockData";
import { AppState } from "../../../store/reducer";
import CustomButton from "../../../ui-component/CustomUIComp/CustomButton";
import CustomFormHelper from "../../../ui-component/CustomUIComp/CustomFormHelper";
import CustomPagination from "../../../ui-component/CustomUIComp/CustomPagination";
import CustomSelectOption from "../../../ui-component/CustomUIComp/CustomSelectOption";
import CustomTable from "../../../ui-component/CustomUIComp/CustomTable";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import {
  addPlaylistValid,
  addPlaylistValues,
} from "../../../utils/formikFormAndValidation";
import {
  allTestCaseDrawer,
  playlistCloumns,
} from "../../../utils/tableColumns";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide direction="up" ref={ref} {...props} style={{ background: "red" }} />
  );
});

const Playlists = () => {
  const theme = useTheme<any>();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const { darkMode } = useSelector((state: AppState) => state.auth);

  const [modeValue, setModeValue] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(100);
  const [selectedPlaylistItem, setSelectedPlaylistItem] = useState({
    id: 101,
    name: "Custom Playlist",
    mode: "Private",
  });
  const [openResultPopup, setOpenResultPopup] = useState(false);

  const [page, setPage] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [maxResultCount, setMaxResultCount] = useState(10);

  const handlePlaylistClick = (playlistId: number) => {
    if (playlistId === selectedPlaylist) return setSelectedPlaylist(null);
    setSelectedPlaylist(playlistId);
  };

  const handlePlaylistItemClick = (playlistItemData: {
    id: number;
    name: string;
    mode: string;
  }) => {
    setSelectedPlaylistItem(playlistItemData);
  };

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
    <Fragment>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item md={3} sm={12} xs={12}>
          <Card sx={{ mb: "1rem" }} elevation={1}>
            <CardContent>
              <List
                sx={{
                  width: "100%",
                }}
                component="nav"
                // subheader={
                //   <ListSubheader component="div" id="nested-list-subheader">
                //     Availabe Playlist
                //   </ListSubheader>
                // }
              >
                {playlistMenuData?.map((playlist) => (
                  <Fragment>
                    <ListItemButton
                      onClick={() => handlePlaylistClick(playlist?.id)}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant={
                              selectedPlaylist === playlist.id ? "h5" : "body1"
                            }
                            color="inherit"
                            sx={{
                              my: "auto",
                              ...theme.typography.navDarkModeColor,
                            }}
                          >
                            {playlist.mainButton}
                          </Typography>
                        }
                      />
                      {selectedPlaylist === playlist?.id ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                    <Divider sx={{ mb: ".5rem" }} />

                    <Collapse
                      in={selectedPlaylist === playlist?.id}
                      timeout="auto"
                      unmountOnExit
                      sx={{ px: ".1rem" }}
                    >
                      {playlist?.items?.map((data) => (
                        <List component="nav" disablePadding>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() =>
                              handlePlaylistItemClick({
                                id: data?.id,
                                name: data?.childButton,
                                mode: data?.mode,
                              })
                            }
                            selected={selectedPlaylistItem?.id === data?.id}
                          >
                            <ListItemText primary={data?.childButton} />
                          </ListItemButton>
                        </List>
                      ))}
                    </Collapse>
                  </Fragment>
                ))}
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                  sx={{ p: 2 }}
                >
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    onClick={() => setOpenResultPopup(true)}
                  >
                    <Add />
                  </Fab>
                </Box>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section */}
        <Grid item md={9} xs={12} sm={12} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12} sm={12}>
              <Box display="flex" flexDirection="column">
                <Typography variant="h3" mb={"1rem"}>
                  {selectedPlaylistItem?.name}
                </Typography>
                <Box
                  sx={{
                    ...theme.typography.darkModeBg4,
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    minHeight: "5rem",
                    px: "1rem",
                    py: "0.7rem",
                    borderRadius: "8px",
                    gap: "1rem",
                  }}
                >
                  <FormControlLabel
                    sx={{
                      display: "block",
                      "& .MuiSwitch-track": {
                        border: "1px solid #2196f3",
                      },
                      "& .MuiSwitch-thumb": {
                        border: ".5px solid #2196f3",
                      },
                    }}
                    control={
                      <Switch
                        checked={modeValue}
                        onChange={() => setModeValue((value) => !value)}
                        name={selectedPlaylistItem?.mode ?? ""}
                        color="primary"
                      />
                    }
                    label={selectedPlaylistItem?.mode ?? ""}
                  />
                  {selectedPlaylistItem?.mode === "Public" ? (
                    <Fragment>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />

                      <Typography variant="caption"> Created By: </Typography>
                      <Typography variant="h6"> Mark Roeckel</Typography>

                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Typography variant="caption"> Last Updated: </Typography>
                      <Typography variant="h6">
                        {" "}
                        11/30/2022 @08:16pm{" "}
                      </Typography>
                    </Fragment>
                  ) : null}
                </Box>
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Card sx={{ mb: "1rem" }} elevation={1}>
                <CardContent sx={{ p: 2 }}>
                  <Box>
                    <CustomTable
                      columns={playlistCloumns}
                      data={playlistTableData}
                    />
                    <CustomPagination
                      component={"div"}
                      count={playlistTableData?.length ?? 0}
                      onPageChange={(event, value) =>
                        handlePageChange(event, value)
                      }
                      onRowsPerPageChange={handleLimitChange}
                      page={page}
                      rowsPerPage={maxResultCount}
                      rowsPerPageOptions={[5, 10, 15, 20, 25]}
                    />
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      flexDirection="row"
                      sx={{ p: 2 }}
                    >
                      <Fab
                        color="primary"
                        aria-label="add"
                        size="small"
                        onClick={() => setOpen(true)}
                      >
                        <Add />
                      </Fab>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Playlist Modal Dialog Box */}
        <Grid item md={12} sm={12} xs={12}>
          <Dialog
            PaperProps={{
              style: {
                maxWidth: "55rem",
                width: "40rem",
                ...theme.typography.darkModeBg4,
              },
            }}
            aria-describedby="alert-dialog-slide-description"
            open={openResultPopup}
          >
            <Box sx={{ textAlign: "right" }}>
              <Button size="small" onClick={() => setOpenResultPopup(false)}>
                <CloseOutlinedIcon sx={{ color: "red" }} />
              </Button>
            </Box>

            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "flex-start",
                pt: "0",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "1.4rem" }}>
                Add Playlist
              </Typography>
            </DialogTitle>
            <Divider orientation="horizontal" sx={{ background: "black" }} />

            <Divider orientation="horizontal" sx={{ background: "black" }} />

            <DialogContent sx={{}}>
              <Formik
                initialValues={addPlaylistValues}
                onSubmit={(value) => console.log(value, "Submitted Values")}
                validationSchema={addPlaylistValid}
              >
                {({ handleChange, values, errors, setFieldValue }) => (
                  <Form noValidate>
                    <Grid container spacing={matchDownSM ? 0 : 2}>
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField
                          fullWidth
                          label="Name"
                          margin="none"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          autoComplete="off"
                          variant="outlined"
                        />
                        <CustomFormHelper name="name" />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField
                          fullWidth
                          label="Description"
                          margin="none"
                          name="description"
                          type="text"
                          value={values.description}
                          onChange={handleChange}
                          autoComplete="off"
                          variant="outlined"
                        />
                        <CustomFormHelper name="description" />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <CustomSelectOption
                          name="testType"
                          label="Select Test Type"
                          value={values.testType}
                          options={addPlaylistSelectData}
                          onChange={handleChange}
                        />
                        <CustomFormHelper name="testType" />
                      </Grid>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                      <AnimateButton>
                        <Button
                          disableElevation
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Add
                        </Button>
                      </AnimateButton>
                    </Box>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
      {/* Fullscreen Table Drawer */}
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        sx={{
          ...theme.typography.basicDarkModeBg3,
        }}
      >
        <Grid
          container
          sx={{
            ...theme.typography.basicDarkModeBg3,
            [theme.breakpoints.up("md")]: {
              height: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              height: "100%",
            },
            [theme.breakpoints.up("lg")]: {
              height: "100%",
            },
          }}
        >
          <Grid item md={12} xs={12} sm={12}>
            <AppBar
              enableColorOnDark
              sx={{ position: "relative", ...theme.typography.appBar }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => setOpen(false)}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1, color: "white" }}
                  variant="h4"
                >
                  All Test Cases
                </Typography>
                <CustomButton
                  name="Save"
                  variant="outlined"
                  color="inherit"
                  onClick={() => setOpen(false)}
                  size="small"
                  startIcon={<SaveIcon />}
                />
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            sx={{ p: "2rem", position: "relative" }}
          >
            <Grid container spacing={2}>
              <Grid item md={12} xs={12} sm={12}>
                <Box display="flex" flexDirection="column">
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
                    <Box display="flex" gap={"1rem"} flexWrap={"wrap"}>
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
                <Card sx={{ mb: "1rem" }} elevation={1}>
                  <CardContent sx={{ p: 2 }}>
                    <Box>
                      <CustomTable
                        columns={allTestCaseDrawer}
                        data={playlistTableData}
                      />
                      <CustomPagination
                        component={"div"}
                        count={playlistTableData?.length ?? 0}
                        onPageChange={(event, value) =>
                          handlePageChange(event, value)
                        }
                        onRowsPerPageChange={handleLimitChange}
                        page={page}
                        rowsPerPage={maxResultCount}
                        rowsPerPageOptions={[5, 10, 15, 20, 25]}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};

export default Playlists;

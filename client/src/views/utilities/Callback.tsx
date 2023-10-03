import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch, AppState } from "../../store/reducer";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

const Callback = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{ px: "1rem", py: "1rem" }}
        startIcon={<CircularProgress size={30} sx={{ color: "white" }} />}
      >
        <Typography variant="h6" sx={{ ml: "0.5rem", color: "white" }}>
          Entering UI Portal
        </Typography>
      </Button>
    </Box>
  );
};

export default Callback;

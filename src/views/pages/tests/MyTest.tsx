import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomFilter from "../../../ui-component/CustomUIComp/CustomFilter";
import CustomMyTestCard from "../../../ui-component/CustomUIComp/CustomMyTestCard";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { LoadingButton } from "@mui/lab";

const MyTest = () => {
  const theme = useTheme<any>();
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => setShowPopup(false);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CustomFilter title={"Filter by Tags"} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            ...theme.typography.darkModeBg4,
            height: "77vh",
            px: "1rem",
            py: "1rem",
            flexWrap: "wrap",
          }}
        >
          <CustomMyTestCard setShowPopup={setShowPopup} />
          <CustomMyTestCard setShowPopup={setShowPopup} />
        </Box>
      </Grid>

      {/* --------------------------------------------------Dialog Box--------------------------------------------- */}

      <Dialog
        PaperProps={{
          style: {
            overflow: "initial",
            minHeight: "10rem",
            maxWidth: "55rem",
            width: "70%",
            ...theme.typography.darkModeBg4,
          },
        }}
        style={{
          backdropFilter: "blur(2px)",
        }}
        aria-describedby="alert-dialog-slide-description"
        open={showPopup}
      >
        <Box sx={{ textAlign: "right" }}>
          <Button size="small" onClick={handlePopupClose}>
            <CloseOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </Box>

        <DialogTitle sx={{ pt: 0 }}>
          <Typography variant="h5" sx={{ fontSize: "1.4rem" }}>
            My Test : <span style={{ marginLeft: "1rem" }} /> Advanced Chamber
            1.1
          </Typography>
          <Typography variant="h3"></Typography>
        </DialogTitle>
        <Divider orientation="horizontal" sx={{ background: "black" }} />

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              User
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              Start Time
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              Certification Run
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              Test Type
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", mr: "1rem" }}>
              Data Directory
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", mr: "3rem" }}>
              Test Suite
            </Typography>
          </Box>
        </DialogContent>
        <Divider orientation="horizontal" sx={{ background: "black" }} />

        <DialogContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "23rem",
            gap: "2rem",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            Tests:
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "39rem",
              gap: "1rem",
              alignItems: "flex-start",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <LoadingButton
                loading
                loadingPosition="start"
                variant="text"
                size="large"
              />
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", mr: "-4rem" }}
              >
                Test 1
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <LoadingButton
                loading
                loadingPosition="start"
                variant="text"
                size="large"
              />
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", mr: "-4rem" }}
              >
                Test 2{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <LoadingButton
                loading
                loadingPosition="start"
                variant="text"
                size="large"
              />
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", mr: "-4rem" }}
              >
                Test 3
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default MyTest;

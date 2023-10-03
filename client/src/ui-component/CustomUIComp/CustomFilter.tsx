import { Box, Button, TextField, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { styled, useTheme } from "@mui/material/styles";

interface Props {
  heading?: string;
  title: string;
  search?: boolean;
  showScheduleBtn?: boolean;
}

const CustomFilter = (props: Props): ReactElement => {
  const { heading, title, search, showScheduleBtn } = props;
  const theme = useTheme<any>();
  return (
    <Box
      sx={{
        ...theme.typography.darkModeBg4,
        minHeight: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.4rem",
        px: "1rem",
        py: "0.7rem",
        borderRadius: "8px",
      }}
    >
      {heading && (
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          {heading}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1" sx={{}}>
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Button variant="outlined" size="small">
              Tags 1
            </Button>
            <Button variant="outlined" size="small">
              Tags 2
            </Button>{" "}
            <Button variant="outlined" size="small">
              Tags 3
            </Button>
            <Button variant="outlined" size="small">
              Tags 4
            </Button>
            <Button variant="outlined" size="small">
              Tags 5
            </Button>
            <Button variant="outlined" size="small">
              Tags 6
            </Button>
          </Box>
        </Box>
        {search ? (
          <TextField
            label="Search  Inventory Name"
            size="small"
            id="filled-basic"
          />
        ) : null}
        {showScheduleBtn ? (
          <Button variant="contained"> Schedule a test </Button>
        ) : null}
      </Box>
    </Box>
  );
};

export default CustomFilter;

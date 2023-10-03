import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { ReactEventHandler, useEffect, useState } from "react";
import logo from "../../assets/Amniverse.svg";
import AnimateButton from "../../ui-component/extended/AnimateButton";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import useScriptRef from "../../hooks/useScriptRef";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Google from "../../assets/images/icons/social-google.svg";
import { Link } from "react-router-dom";
import {
  StrengthColorTypo,
  strengthColor,
  strengthIndicator,
} from "../../utils/password-strength";

const Register = () => {
  const theme = useTheme();

  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState<StrengthColorTypo | null>(null);

  const googleHandler = async () => {
    console.error("Register");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  return (
    <Grid
      container
      justifyContent="center" // Horizontally center the grid
      alignItems="center" // Vertically center the grid
      style={{ height: "100vh" }} // Optional: Set a specific height
    >
      <Grid item sx={{ minWidth: "20rem", maxWidth: "30rem", p: "1rem" }}>
        <Paper
          elevation={3}
          sx={{
            p: "2rem",
            pt: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: ".8rem",
          }}
        >
          {/* logo */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} height={60} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: ".6rem",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontSize: "1.4rem", color: "#2196f3" }}
              >
                SIGN UP
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: `${theme.palette.grey[500]}` }}
              >
                Enter your credentials to continue
              </Typography>
            </Box>
          </Box>

          {/* welcome text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              mt: "1rem",
            }}
          >
            <AnimateButton sx={{}}>
              <Button
                size="large"
                variant="outlined"
                sx={{
                  color: "grey.700",
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100],
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2 }, mt: "0.3rem" }}>
                  <img
                    src={Google}
                    alt="google"
                    width={16}
                    height={16}
                    style={{ marginRight: matchDownSM ? 8 : 16 }}
                  />
                </Box>
                Sign up with Google
              </Button>
            </AnimateButton>
          </Box>

          {/* or icon */}
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: "unset",
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: "6px",
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>

          {/* sign in with */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: "1rem",
            }}
          >
            <Typography variant="h6">Sign up with Email Address</Typography>
          </Box>

          {/* formik */}

          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              fname: Yup.string().required("First name is required"),
              lname: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                if (scriptedRef.current) {
                  setStatus({ success: true });
                  setSubmitting(false);
                }
              } catch (err: any) {
                if (scriptedRef.current) {
                  setStatus({ success: false });
                  setErrors({ submit: err.message });
                  setSubmitting(false);
                }
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      error={Boolean(touched.fname || errors.fname)}
                      sx={{ mb: "1rem" }}
                    >
                      <InputLabel htmlFor="outlined-adornment-fname-register">
                        First Name
                      </InputLabel>
                      <OutlinedInput
                        fullWidth
                        label="First Name"
                        name="fname"
                        type="text"
                        value={values.fname}
                        onChange={handleChange}
                      />
                      {touched.fname && errors.fname && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.fname}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      sx={{ mb: "1rem" }}
                      error={Boolean(touched.lname && errors.lname)}
                    >
                      <InputLabel htmlFor="outlined-adornment-lname-register">
                        Last Name
                      </InputLabel>
                      <OutlinedInput
                        fullWidth
                        label="Last Name"
                        name="lname"
                        value={values.lname}
                        type="text"
                        onChange={handleChange}
                      />
                      {touched.lname && errors.lname && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.lname}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  sx={{
                    mb: "1rem",
                  }}
                >
                  <InputLabel htmlFor="outlined-adornment-email-register">
                    Email Address / Username
                  </InputLabel>
                  <OutlinedInput
                    label=" Email Address / Username"
                    id="outlined-adornment-email-register"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  sx={{
                    mb: "1rem",
                  }}
                >
                  <InputLabel htmlFor="outlined-adornment-password-register">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-register"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-register"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>

                {strength !== 0 && (
                  <FormControl fullWidth>
                    <Box sx={{ mb: 2 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Box
                            style={{ background: level?.color }}
                            sx={{ width: 85, height: 8, borderRadius: "7px" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" fontSize="0.75rem">
                            {level?.label}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </FormControl>
                )}

                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={(event) => setChecked(event.target.checked)}
                          name="checked"
                          color="primary"
                        />
                      }
                      label={
                        <Typography variant="subtitle1">
                          Agree with &nbsp;
                          <Typography
                            variant="subtitle1"
                            component={Link}
                            to="#"
                          >
                            Terms & Condition.
                          </Typography>
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}

                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Sign up
                    </Button>
                  </AnimateButton>
                </Box>
              </form>
            )}
          </Formik>

          {/* dont have account */}
          <Divider sx={{ flexGrow: "1" }} orientation="horizontal" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component={Link}
              to="/login"
              variant="subtitle1"
              sx={{ textDecoration: "none" }}
            >
              Already have an account?
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;

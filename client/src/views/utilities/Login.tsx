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
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { ReactEventHandler, useState } from "react";
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

const Login = () => {
  const theme = useTheme();

  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [checked, setChecked] = useState(true);

  const googleHandler = async () => {
    console.error("Login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
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
                Hi, Welcome Back
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
                Sign with Google
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
            <Typography variant="h6">Sign in with Email Address</Typography>
          </Box>

          {/* formik */}
          <Formik
            initialValues={{
              email: "info@codedthemes.com",
              password: "123456",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(25)
                .required("Email is required"),
              password: Yup.string().max(15).required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                if (scriptedRef.current) {
                  console.log(values, "value");
                  setStatus({ success: true });
                  setSubmitting(false);
                }
              } catch (err: any) {
                if (scriptedRef.current) {
                  setStatus({ success: false });
                  setErrors({ submit: err?.message });
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
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  sx={{ mb: "1rem" }}
                >
                  <InputLabel htmlFor="outlined-adornment-email-login">
                    Email Address / Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Email Address / Username"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  sx={{}}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    label="Password"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Typography>
                </Stack>
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
                      Sign in
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
              to="/register"
              variant="subtitle1"
              sx={{ textDecoration: "none" }}
            >
              Don&apos;t have an account?
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;

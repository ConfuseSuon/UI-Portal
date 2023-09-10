/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { useSelector } from "react-redux";
import { AppState } from "../store/reducer";

export default function themeTypography(theme: any) {
  const { darkMode } = useSelector((state: AppState) => state.auth);

  return {
    fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: darkMode ? theme.headingDarkMode : theme.heading,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      color: darkMode ? theme.headingDarkMode : theme.heading,
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      color: darkMode ? theme.headingDarkMode : theme.heading,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      color: darkMode ? theme.headingDarkMode : theme.heading,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      color: darkMode ? theme.headingDarkMode : theme.heading,
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      color: darkMode ? theme.headingDarkMode : theme.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: darkMode ? theme.headingDarkMode : theme.heading,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: theme.darkTextSecondary,
    },
    caption: {
      fontSize: "0.75rem",
      color: theme.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
      color: darkMode ? theme.bodyDarkMode : "",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: darkMode ? theme.body2DarkMode : theme.darkTextPrimary,
    },
    button: {
      textTransform: "capitalize",
    },
    customInput: {
      marginTop: 0,
      marginBottom: 1.5,
      "& > label": {
        top: 0,
        left: 0,
        background: theme.colors.grey50,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 0,
        },
      },
      "& > div > input": {
        padding: "5px 13px 5.5px !important",
        background: "transparent",
      },
      "& legend": {
        display: "none",
        background: "white",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: {
      background: darkMode ? theme.backgroundDarkMode3 : theme.background,
      width: "100%",
      minHeight: "calc(100vh - 62px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "62px",
      marginRight: "20px",
      borderRadius: `${theme?.customization?.borderRadius}px`,
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: darkMode ? theme.darkModeText : theme.heading,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: "white",
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
    profileSmall: {
      width: "28px",
      height: "28px",
      fontSize: "0.5rem",
    },
    customAvatar: {
      width: "48px",
      height: "34px",
      fontSize: "1.3rem",
      paddingLeft: "0.1rem",
    },
    darkModeBg4: {
      background: darkMode
        ? theme.backgroundDarkMode4
        : theme.backgroundDefault,
    },
    darkModeBg3: {
      background: darkMode ? theme.backgroundDarkMode3 : theme.background,
      border: darkMode
        ? `1px solid ${theme.borderColor}`
        : `1px solid ${theme.borderLightColor}`,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(5px) rotate(0deg) scale(1.03)",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1),   0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
    darkModeInput: {
      background: darkMode ? theme.selectedItem : theme.headingDarkMode,
    },
    navDarkModeColor: {
      color: darkMode ? theme.bodyDarkMode : "",
    },
    menuSelectedBack: {
      color: darkMode ? theme.darkLevel1 : theme.primaryLight,
    },
    dashboardCard: {
      border: darkMode
        ? `1px solid ${theme.borderColor}`
        : `1px solid ${theme.borderLightColor}`,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(5px) rotate(0deg) scale(1.03)",
      },
    },
  };
}

// menuSelected: color.primaryDark,
//     menuSelectedBack: ,

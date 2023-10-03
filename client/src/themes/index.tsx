import { createTheme } from "@mui/material/styles";

// assets
// import colors from 'assets/scss/_themes-vars.module.scss';
import colors from "../assets/scss/_themes-vars.module.scss";
// project imports
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import themeTypography from "./typography";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme: any = (customization: any) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    headingDarkMode: color.grey50,
    bodyDarkMode: color.grey200,
    body2DarkMode: color.grey100,
    paper: color.paper,
    backgroundDefault: color.paper,
    backgroundDarkMode3: color.darkLevel3,
    backgroundDarkMode4: color.darkLevel4,
    background: color.grey50,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.primaryDark,
    menuSelectedBack: color.primaryLight,
    divider: color.grey200,
    darkModeText: "white",
    borderColor: color.grey700,
    borderLightColor: color.grey300,
    customization,
  };

  const themeOptions: any = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;

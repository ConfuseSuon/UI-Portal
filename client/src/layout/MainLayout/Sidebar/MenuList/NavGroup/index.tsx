import * as PropTypes from "prop-types";

// material-ui
import { Divider, List, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import { useSelector } from "react-redux";
import colors from "../../../../../assets/scss/_themes-vars.module.scss";
import { AppState } from "../../../../../store/reducer";
import NavCollapse from "../NavCollapse";
import NavItem from "../NavItem";

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }: any) => {
  const theme: any = useTheme();
  const color = colors;

  const { darkMode } = useSelector((state: AppState) => state.auth);
  // menu list collapse & items
  const items = item.children?.map((menu: any) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.menuCaption }}
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant="caption"
                  sx={{ ...theme.typography.subMenuCaption }}
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;

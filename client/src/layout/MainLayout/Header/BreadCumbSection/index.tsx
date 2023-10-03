import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
//mui.com/material-ui/react-breadcrumbs/#

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    color: theme.palette.text.primary,
    height: "1.9rem",
    fontSize: "0.8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      height: "1.5rem",
    },
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomizedBreadcrumbs() {
  const theme = useTheme<any>();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box
      sx={{
        ml: "1rem",
        maxWidth: "40rem",
        [theme.breakpoints.down("md")]: {
          ml: "0.6rem",
          minWidth: "15rem",
        },
      }}
    >
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          {pathnames.length > 0 ? (
            pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              return (
                <Link to={routeTo} key={index}>
                  <StyledBreadcrumb
                    label={name}
                    sx={{ textTransform: "capitalize", cursor: "pointer" }}
                  />
                </Link>
              );
            })
          ) : (
            <Link to={"/"}>
              <StyledBreadcrumb
                label="Dashboard"
                // icon={<HomeIcon fontSize="small" />}
              />
            </Link>
          )}
        </Breadcrumbs>
      </div>
    </Box>
  );
}

// import { useState } from "react";

// // material-ui
// import { useTheme, styled } from "@mui/material/styles";
// import {
//   Avatar,
//   Box,
//   ButtonBase,
//   Card,
//   Grid,
//   InputAdornment,
//   OutlinedInput,
//   Popper,
//   Typography,
// } from "@mui/material";

// // third-party
// import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";

// // project imports
// import Transitions from "../../../../ui-component/extended/Transitions";
// // assets
// import { shouldForwardProp } from "@mui/system";
// import { useLocation } from "react-router";
// import { Link } from "react-router-dom";

// const BreadCumbSection = () => {
//   const theme = useTheme();
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <>
//       <Box
//         sx={{
//           ml: "1rem",
//           maxWidth: "15rem",
//           [theme.breakpoints.down("md")]: {
//             ml: "0.2rem",
//           },
//         }}
//       >
//         {pathnames.length > 0 ? (
//           pathnames.map((name, index) => {
//             const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//             const isLast = index === pathnames.length - 1;
//             return (
//               <Typography
//                 sx={{
//                   display: "inline",
//                   fontWeight: "400",
//                   fontSize: "1rem",
//                   [theme.breakpoints.down("md")]: {
//                     fontSize: "0.9rem",
//                   },
//                 }}
//                 key={index}
//               >
//                 <Link
//                   to={routeTo}
//                   style={{
//                     textDecoration: "none",
//                     color: "#2196f3",
//                     textTransform: "capitalize",
//                     marginLeft: "0.3rem",
//                   }}
//                 >
//                   {name}
//                 </Link>
//                 {!isLast && " > "}
//               </Typography>
//             );
//           })
//         ) : (
//           <Typography
//             sx={{
//               display: "inline",
//               fontWeight: "400",
//               fontSize: "1.2rem",
//               [theme.breakpoints.down("md")]: {
//                 fontSize: "0.9rem",
//               },
//             }}
//           >
//             <Link
//               to={"/"}
//               style={{
//                 textDecoration: "none",
//                 color: "#2196f3",
//                 textTransform: "capitalize",
//                 marginLeft: "0.3rem",
//               }}
//             >
//               Dashboard
//             </Link>
//           </Typography>
//         )}
//       </Box>
//     </>
//   );
// };

// export default BreadCumbSection;

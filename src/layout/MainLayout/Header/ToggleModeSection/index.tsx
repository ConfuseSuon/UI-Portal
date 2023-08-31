import styled from "@emotion/styled";
import React from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useMediaQuery } from "@mui/material";
const ModeBox = styled.div`
  * {
    box-sizing: border-box;
  }
  .checkbox {
    opacity: 0;
    position: absolute;
  }
  .checkbox-label {
    background-color: #2196f3;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    border: 1px solid #2196f3;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .checkbox-label .ball {
    background-color: #fff;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }
  .checkbox:checked + .checkbox-label .ball {
    transform: translateX(24px);
  }
`;

const ToggleModeSection = () => {
  const isMobile = useMediaQuery("(max-width: 550px)"); // Adjust the max-width to your desired breakpoint

  if (isMobile) {
    return null;
  }

  return (
    <ModeBox style={{ marginRight: "1.5rem" }}>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label">
        <NightsStayIcon sx={{ color: "yellow", fontSize: "1rem" }} />
        <LightModeIcon sx={{ color: "yellow", fontSize: "1rem" }} />
        <span className="ball"></span>
      </label>
    </ModeBox>
  );
};

export default ToggleModeSection;

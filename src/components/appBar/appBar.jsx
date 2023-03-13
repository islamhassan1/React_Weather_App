import React, { useState, useEffect } from "react";
import "../appBar/appBar.css";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

const appBar = () => {
  return (
    <div className="appBar">
      <div className="left_side">
        <div className="Sketch">Sketch</div>
        <div className="wifi">
          <WifiIcon />
        </div>
        <div className="big_dot">&#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf; </div>
      </div>
      <div className="right_side">
        <div className="battery">
          <BatteryFullIcon />
        </div>
        <div className="time">10:41</div>
      </div>
    </div>
  );
};

export default appBar;

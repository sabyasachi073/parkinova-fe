import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import "./SideMenu.css";

// Sidebar Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import TimelineIcon from "@mui/icons-material/Timeline";
import LandscapeIcon from "@mui/icons-material/Landscape";

const SideMenu = ({ activeButton, setActiveButton, userDetails }) => {
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="menu__container">
        <div className="sidebar__menu">
          <div className="menu__account">
            <div className="menu__accountDetails">
              <div className="menu__accountName">{userDetails.full_name}</div>
              <div className="menu__accountProfile">{userDetails.email}</div>
            </div>
          </div>

          <div className="menu__buttons">
            <a href="#content1">
              <Button
                variant="contained"
                className={activeButton === "dashboard" ? "active" : ""}
                onClick={() => handleButtonClick("dashboard")}
              >
                <DashboardIcon className="dashboard-icons" />
                Dashboard
              </Button>
            </a>
            <a href="#content2">
              <Button
                variant="contained"
                className={activeButton === "latest-submission" ? "active" : ""}
                onClick={() => handleButtonClick("latest-submission")}
              >
                <TimelineIcon className="dashboard-icons" />
                Latest Submissions
              </Button>
            </a>
            <a href="#content3">
              <Button
                variant="contained"
                className={activeButton === "other-submission" ? "active" : ""}
                onClick={() => handleButtonClick("other-submission")}
              >
                <HistoryIcon className="dashboard-icons" />
                Other Submissions
              </Button>
            </a>
            <Link to="/upload">
              <Button
                variant="contained"
                className={activeButton === "upload-new" ? "active" : ""}
                onClick={() => handleButtonClick("upload-new")}
              >
                <LandscapeIcon className="dashboard-icons" />
                Upload New
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

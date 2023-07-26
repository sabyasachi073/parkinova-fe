import React from "react";
import "./Menu.css";

import { useHistory } from "react-router-dom";

// Button Icons for Menu
import AnchorIcon from "@mui/icons-material/Anchor";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";

function Menu({ button__active }) {
  const history = useHistory();

  return (
    <div className="menu__container">
      <div className="menu">
        <div className="menu__logoContainer">
          <img
            className="menu__logo"
            src="https://sttheresasandila.in/images/school_spec/Logo_small.png"
            alt="menuLogo"
          />
        </div>

        <div className="menu__buttons">
          <Button
            variant="contained"
            className={button__active === "home" && "active"}
            onClick={() => history.push("./")}
          >
            <HomeRoundedIcon className="menu__buttonIcons" />
            Home
          </Button>
          <Button variant="contained">
            <AssignmentOutlinedIcon className="menu__buttonIcons" />
            Notice Board
          </Button>

          <Button
            variant="contained"
            className={button__active === "attendance" && "active"}
            onClick={() => history.push("./attendance")}
          >
            <CalendarTodayOutlinedIcon className="menu__buttonIcons" />
            Attendance
          </Button>

          <Button variant="contained">
            <ReceiptRoundedIcon className="menu__buttonIcons" />
            Fees Details
          </Button>

          <Button variant="contained">
            <DateRangeOutlinedIcon className="menu__buttonIcons" />
            Calendar
          </Button>

          <Button variant="contained">
            <PermMediaOutlinedIcon className="menu__buttonIcons" />
            Multimedia
          </Button>

          <Button variant="contained">
            <DashboardOutlinedIcon className="menu__buttonIcons" />
            Time-tables
          </Button>

          <Button variant="contained">
            <ScheduleIcon className="menu__buttonIcons" />
            Schedules
          </Button>

          <Button variant="contained">
            <PeopleAltRoundedIcon className="menu__buttonIcons" />
            Support Requests
          </Button>

          <Button variant="contained">
            <FlagOutlinedIcon className="menu__buttonIcons" />
            Support
          </Button>

          <Button variant="contained">
            <PersonRoundedIcon className="menu__buttonIcons" />
            Account
          </Button>
        </div>

        <div className="menu__account">
          <div className="menu__accountDetails">
            <div className="menu__accountName">Fr. Paul D'Souza</div>
            <div className="menu__accountProfile">Admin Account</div>
          </div>
          <UnfoldMoreIcon />
        </div>
      </div>
      <div className="menu__divider">&nbsp;</div>
    </div>
  );
}

export default Menu;

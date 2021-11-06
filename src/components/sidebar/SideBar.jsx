import "./sideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MessageIcon from "@mui/icons-material/Message";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PersonIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AccountBalanceIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyleIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

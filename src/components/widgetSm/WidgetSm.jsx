import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Display"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankit Upadhyay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Display"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankit Upadhyay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Display"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankit Upadhyay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Display"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankit Upadhyay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Display"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankit Upadhyay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;

import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import "../css/pages.css";
import "../css/question.css";
import Toggle2 from "../../MyToggleButton/MyToggleBtn";

function OldQuestion5() {
  const dateForm = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date().toLocaleDateString("en-IN", dateForm);
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const upDateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(upDateTime, 1000);

  const [toggled, setToggled] = useState(true);

  return (
    <div className="pages">
      <h1>Question No. 5</h1>
      <br />

      <div className="digital-clock-main">
        <div className="myClockTitle">
          <FontAwesomeIcon className="clock-icon fa-2x" icon={faClock} />
          Digital Clock
        </div>

        <div className="myClockContent">
          <div className="date-toggle-class">
            {/* <Button
              className="toggle-btn shadow-none"
              // onClick={() => deleteEmp(person.id)}
              variant="primary"
              type="mytogglebutton"
            >
              <div className="toggle-circle" />
            </Button> */}
            <Toggle2 toggled={toggled} setToggled={setToggled}/>
            <FontAwesomeIcon
              className="calendar-icon fa-3x"
              icon={faCalendarAlt}
            />
          </div>

          <br />

          <div className="display-clock">
            <h3 id="time">{ctime}</h3>
            {
              toggled ? 
                <p id="date">{date}</p> 
              : <></>
            }
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
// }

export default OldQuestion5;

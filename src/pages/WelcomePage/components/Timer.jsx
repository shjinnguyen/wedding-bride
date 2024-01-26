import React, { useState, useEffect } from "react";
import moment from "moment";

import "./styles.scss";

const Timer = ({ futureMoment }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (futureMoment) => {
    const now = moment();
    const duration = moment.duration(futureMoment.diff(now));

    const newTime = {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };

    setTime(newTime);
  };

  useEffect(() => {
    calculateTimeLeft(futureMoment);
    const interval = setInterval(() => calculateTimeLeft(futureMoment), 1000);
    return () => clearInterval(interval);
  }, [futureMoment]);

  return (
    <div className="timer-left">
      <div className="timer-block">
        <h2>{String(time?.days).padStart(2, "0")}</h2>
        <p>Ngày</p>
      </div>
      <div className="timer-block">
        <h2>{String(time?.hours).padStart(2, "0")}</h2>
        <p>Giờ</p>
      </div>
      <div className="timer-block">
        <h2>{String(time?.minutes).padStart(2, "0")}</h2>
        <p>Phút</p>
      </div>
      <div className="timer-block">
        <h2>{String(time?.seconds).padStart(2, "0")}</h2>
        <p>Giây</p>
      </div>
    </div>
  );
};

export default Timer;

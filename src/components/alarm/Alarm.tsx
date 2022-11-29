import React, { Dispatch, SetStateAction } from "react";
import { BiX } from "react-icons/bi";

import "../../assets/css/alarm.css";

interface ITemp {
  isAlarm: number;
  setIsAlarm: Dispatch<SetStateAction<number>>;
}

export default function Alarm(props: ITemp) {
  const message = props.isAlarm === 1 ? "온도가 낮습니다." : "온도가 높습니다.";
  return (
    <div className="alarm">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: "-20px", left: "105px" }}>
          <BiX onClick={() => props.setIsAlarm(0)} />
        </div>
      </div>
      <div style={{ color: "black", fontSize: "13px" }}>
        {message}
        <span style={{ color: "black" }}> 온도 조절이 필요합니다 !</span>
      </div>
      <div style={{ color: "gray", fontSize: "10px" }}>
        적정 온도 : 18 ~ 21℃
      </div>
    </div>
  );
}

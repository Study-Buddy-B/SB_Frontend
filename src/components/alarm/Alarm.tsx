import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { BiX } from "react-icons/bi";
import axios from "axios";
import { Cookies } from "react-cookie";

import "../../assets/css/alarm.css";

export default function Alarm() {
  const cookies = new Cookies();
  const token = cookies.get("uuid");
  const [flag, setFlag] = useState(false);
  const [celsius, setCelsius] = useState(0);
  const [celType, setCelType] = useState(-1);
  const message =
    celType === 1
      ? "온도가 낮습니다."
      : celType === 2
      ? "온도가 높습니다."
      : "";

  //온도 조회 관련
  useLayoutEffect(() => {
    const getTemp = setInterval(async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/temperature`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setCelsius(res.data.current);
        });
    }, 1000);

    return () => clearInterval(getTemp);
  }, []);

  //알람 유무 관련
  useEffect(() => {
    if (celType !== -1) {
      if (celsius < 18) setCelType(1);
      else if (celsius > 21) setCelType(2);
      else setCelType(0);
    }

    setTimeout(function () {
      setCelType(0);
    }, 3000);
  }, [celsius]);

  if (message === "") return <></>;
  return (
    <div className="alarm-wrapper">
      <div className="alarm">
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "-20px", left: "105px" }}>
            <BiX onClick={() => setCelType(0)} />
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
    </div>
  );
}

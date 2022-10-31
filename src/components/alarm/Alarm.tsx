import React from "react";
import { BiX } from "react-icons/bi";

import "../../assets/css/alarm.css";

export default function Alarm() {
    return (
        <div className="alarm">
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '105px' }}>
                    <BiX/>
                </div>
            </div>
            <div style={{ color: 'black', fontSize: '13px' }}>온도가 높습니다. <span style={{ color: 'black' }}>온도 조절이 필요합니다 !</span></div>
            <div style={{ color: 'gray', fontSize: '10px' }}>적정 온도 : 22.5 ~ 24℃</div>
        </div>
    );
}
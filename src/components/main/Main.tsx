import React, { useState } from "react";
import { SlSettings } from "react-icons/sl";

import "../../assets/css/main.css";

export default function Main() {
    const [sit, setSit] = useState(15.7);
    const [goal, setGoal] = useState(20);
    const [gesture, setGesture] = useState("좋은 자세입니다.");
    const [temperature, setTemperature] = useState(36.5);
    const [co2, setCo2] = useState(10);
    const environment_tem = [{contents: "! 적당한 온도입니다."}];
    const environment_co2 = [{contents: "! 환기가 필요합니다."}];

    return (
        <div className="main">
            <div className="study-time-wrapper">
                <div className="flex-row">
                    <div className="main-title">오늘 공부시간</div>
                    <div style={{ marginLeft: '50px', marginTop: '3px', color: '#FF9999' }}><SlSettings /></div>
                </div>
                <div className="flex-row study-time">
                    <div className="font-40">{sit}h</div>
                    <div className="goal-time"> / {goal}h</div>
                </div>
            </div>
            <div>
                <div className="environment-wrapper" style={{ marginTop: '10px' }}>
                    <div className="main-title">현재 환경</div>
                    <div>온도</div>
                    <div className="font-30">{temperature}℃</div>
                    <div className="font-16 color-grey">{environment_tem[0].contents}</div>
                    <div className="margin-top-20">
                        <div>이산화탄소</div>
                        <div className="flex-row">
                            <div className="font-30" style={{ marginRight: '100px' }}>{co2}ppm</div>
                        </div>
                        <div className="font-16 color-grey">{environment_co2[0].contents}</div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}
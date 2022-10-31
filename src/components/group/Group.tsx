import React from "react";
import { IoAdd } from "react-icons/io5";

import "../../assets/css/group.css";

export default function Group() {
    return (
        <div>
            <div className="group-add-wrapper">
                <div className="group-add"><IoAdd size={40} color="gray" /></div>
            </div>
            <div className="group-add-wrapper">
                <div className="group-contents flex-row">
                    <div className="study-name" style={{ marginLeft: '30px' }}>
                        <div className="name">스터디명</div>
                        <div className="type">유형</div>
                    </div>
                    <div style={{ width: '40px', marginLeft: '100px' }}>3 / 5</div>
                    <button style={{ marginLeft: '30px' }}>참가</button>
                </div>
                <div className="group-contents flex-row">
                    <div className="study-name" style={{ marginLeft: '30px' }}>
                        <div className="name">스터디명</div>
                        <div className="type">유형</div>
                    </div>
                    <div style={{ width: '40px', marginLeft: '100px' }}>3 / 5</div>
                    <button style={{ marginLeft: '30px' }}>참가</button>
                </div>
                <div className="group-contents flex-row">
                    <div className="study-name" style={{ marginLeft: '30px' }}>
                        <div className="name">스터디명</div>
                        <div className="type">유형</div>
                    </div>
                    <div style={{ width: '40px', marginLeft: '100px' }}>3 / 5</div>
                    <button style={{ marginLeft: '30px' }}>참가</button>
                </div>
                <div className="group-contents flex-row">
                    <div className="study-name" style={{ marginLeft: '30px' }}>
                        <div className="name">스터디명</div>
                        <div className="type">유형</div>
                    </div>
                    <div style={{ width: '40px', marginLeft: '100px' }}>3 / 5</div>
                    <button style={{ marginLeft: '30px' }}>참가</button>
                </div>
                <div className="group-contents flex-row">
                    <div className="study-name" style={{ marginLeft: '30px' }}>
                        <div className="name">스터디명</div>
                        <div className="type">유형</div>
                    </div>
                    <div style={{ width: '40px', marginLeft: '100px' }}>3 / 5</div>
                    <button style={{ marginLeft: '30px' }}>참가</button>
                </div>
                <div className="group-contents flex-row">
                    <div className="study-name" style={{ marginLeft: '30px' }}>
                        <div className="name">스터디명</div>
                        <div className="type">유형</div>
                    </div>
                    <div style={{ width: '40px', marginLeft: '100px' }}>3 / 5</div>
                    <button style={{ marginLeft: '30px' }}>참가</button>
                </div>
            </div>
        </div>
    );
}
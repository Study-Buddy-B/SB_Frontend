import React from "react";
import { BiUser } from "react-icons/bi";

export default function GNB() {
   
    return (
        <div className="flex-row flex-center" style={{ height: '50px', backgroundColor: '#FFE3E3' }}>
            <div style={{ fontWeight: '800'}}>
                studyBuddy
            </div>
            <div className="flex-row" style={{ marginLeft: '100px' }}>
                <div onClick={()=>window.location.replace("/calendar")}>
                    통계
                </div>
                <div style={{ marginLeft: '10px' }}>
                    그룹
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <BiUser />
                </div>
            </div>
        </div>
    );
}
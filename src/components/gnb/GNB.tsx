import React from "react";
import { BiUser } from "react-icons/bi";

export default function GNB() {
  return (
    <div
      className="flex-row flex-center"
      style={{ height: "50px", backgroundColor: "#FFE3E3" }}
    >
      <div
        style={{ fontWeight: "800", cursor: "pointer" }}
        onClick={() => window.location.replace("/")}
      >
        studyBuddy
      </div>
      <div className="flex-row" style={{ marginLeft: "100px" }}>
        <div style={{ cursor: "pointer" }}>통계</div>
        <div
          style={{ marginLeft: "10px", cursor: "pointer" }}
          onClick={() => window.location.replace("/group")}
        >
          그룹
        </div>
        <div style={{ marginLeft: "10px", cursor: "pointer" }}>
          <BiUser onClick={() => window.location.replace("/group/my")} />
        </div>
      </div>
    </div>
  );
}

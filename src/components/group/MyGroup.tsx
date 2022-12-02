import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface Member {
  name: string;
  curTime: number;
  completion: boolean;
}

interface IGroupinfo {
  tarTime: number;
  detailResponses: Member[];
}

export default function MyGroup() {
  const groupId = useLocation().state.id;
  const [groupInfo, setGroupInfo] = useState<IGroupinfo>();

  useEffect(() => {
    const getGroup = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/group/${groupId}`)
        .then((res) => {
          setGroupInfo(res.data);
        });
    };
    getGroup();
  }, []);

  const renderMember = (): JSX.Element[] | undefined => {
    const memberData = groupInfo?.detailResponses.map((member, i) => {
      return (
        <div className="group-contents flex-row">
          <div
            className="my-study-name flex-row flex-center"
            style={{ marginLeft: "30px" }}
          >
            <div>
              <FaUserCircle size={25} />
            </div>
            <div
              className="name"
              style={{
                color: "gray",
                marginLeft: "10px",
                width: "50px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {member.name}
            </div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>
            {member.curTime} h
          </div>
          <div
            style={{
              marginLeft: "10px",
              color: member.completion ? "green" : "red",
              fontSize: "13px",
            }}
          >
            {!member.completion && "미"}달성
          </div>
        </div>
      );
    });
    return memberData;
  };

  return (
    <div>
      {groupInfo !== undefined && (
        <>
          <div className="font-40 flex-center margin-top-30">
            <div>{groupInfo.tarTime} h</div>
          </div>
          <div className="group-add-wrapper">{renderMember()}</div>
        </>
      )}
    </div>
  );
}

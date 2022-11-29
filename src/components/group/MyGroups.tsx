import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IGroups {
  gid: number;
  name: string;
  type: string;
  curPerson: number;
  maxPerson: number;
}

export default function Mygroups() {
  const cookies = new Cookies();
  const token = cookies.get("uuid");
  const navigate = useNavigate();
  const [groups, setGroups] = useState<IGroups[]>([]);

  useEffect(() => {
    const getGroups = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/group/belong`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setGroups(res.data);
        });
    };
    getGroups();
  }, []);

  const renderGroupsData = (): JSX.Element[] => {
    const groupsData = groups?.map((group, i) => {
      return (
        <div
          className="group-contents flex-row"
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`./${group.gid}`, { state: { id: group.gid } })
          }
        >
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">{group.name}</div>
            <div className="type">{group.type}</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>
            {group.curPerson} / {group.maxPerson}
          </div>
        </div>
      );
    });
    return groupsData;
  };

  return <div className="group-add-wrapper">{renderGroupsData()}</div>;
}

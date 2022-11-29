import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { IoAdd } from "react-icons/io5";

import "../../assets/css/group.css";
import Modal from "../modal/Modal";
import Add from "./Add";

interface IGroups {
  gid: number;
  name: string;
  type: string;
  curPerson: number;
  maxPerson: number;
}

interface MError {
  code: string;
  message: string;
}

export default function Group() {
  const cookies = new Cookies();
  const token = cookies.get("uuid");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [groups, setGroups] = useState<IGroups[]>([]);
  const [groupId, setGroupId] = useState(0);
  const [isAdd, setIsAdd] = useState(0);
  const [modalError, setModalError] = useState<MError>({
    code: "",
    message: "참가하시겠습니까?",
  });

  const closeModal = () => setModalOpen(false);
  const closeModal2 = () => {
    setModalOpen2(false);
    const contents = { code: "", message: "참가하시겠습니까?" };
    setModalError(contents);
  };

  useEffect(() => {
    const getGroups = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/group`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setGroups(res.data);
        });
    };
    getGroups();
  }, [modalError, isAdd]);

  const renderGroupsData = (): JSX.Element[] => {
    const groupsData = groups?.map((group, i) => {
      return (
        <div className="group-contents flex-row" key={i}>
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">{group.name}</div>
            <div className="type">{group.type}</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>
            {group.curPerson} / {group.maxPerson}
          </div>
          <button
            style={{ marginLeft: "30px", cursor: "pointer" }}
            onClick={() => {
              setModalOpen2(true);
              setGroupId(group.gid);
            }}
          >
            참가
          </button>
        </div>
      );
    });
    return groupsData;
  };

  const enterClickHandler = () => {
    const joinGroup = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_SERVER_HOST}/api/v1/group/join?groupId=${groupId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setModalError(res.data);
        })
        .catch((err) => {
          setModalError(err.response.data);
        });
    };
    joinGroup();
  };

  return (
    <div>
      <div className="group-add-wrapper">
        <div
          className="group-add"
          style={{ cursor: "pointer" }}
          onClick={() => setModalOpen(true)}
        >
          <IoAdd size={40} color="gray" />
        </div>
        {modalOpen && (
          <Modal closeModal={closeModal}>
            <Add closeModal={closeModal} setIsAdd={setIsAdd} />
          </Modal>
        )}
        {renderGroupsData()}
        {modalOpen2 && (
          <Modal closeModal={closeModal2}>
            <div>{modalError?.message}</div>
            <div
              className="modal-complete-btn flex-row"
              style={
                modalError.code === "" ? { width: "110px", left: "55px" } : {}
              }
            >
              <button
                onClick={
                  modalError.code === "" ? enterClickHandler : closeModal2
                }
                style={{ marginRight: "10px" }}
              >
                예
              </button>
              {modalError.code === "" && (
                <button onClick={closeModal2}>아니오</button>
              )}
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

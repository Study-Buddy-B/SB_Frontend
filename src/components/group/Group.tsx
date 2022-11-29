import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

import "../../assets/css/group.css";
import Modal from "../modal/Modal";
import Add from "./Add";

export default function Group() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const closeModal = () => setModalOpen(false);
  const closeModal2 = () => setModalOpen2(false);

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
            <Add />
          </Modal>
        )}
      </div>
      <div className="group-add-wrapper">
        <div className="group-contents flex-row">
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">스터디명</div>
            <div className="type">유형</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>3 / 5</div>
          <button style={{ marginLeft: "30px" }}>참가</button>
        </div>
        <div className="group-contents flex-row">
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">스터디명</div>
            <div className="type">유형</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>3 / 5</div>
          <button
            style={{ marginLeft: "30px", cursor: "pointer" }}
            onClick={() => setModalOpen2(true)}
          >
            참가
          </button>
          {modalOpen2 && (
            <Modal closeModal={closeModal2}>
              <div>참가하시겠습니까?</div>
              <button>예</button>
              <button>아니오</button>
            </Modal>
          )}
        </div>
        <div className="group-contents flex-row">
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">스터디명</div>
            <div className="type">유형</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>3 / 5</div>
          <button style={{ marginLeft: "30px" }}>참가</button>
        </div>
        <div className="group-contents flex-row">
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">스터디명</div>
            <div className="type">유형</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>3 / 5</div>
          <button style={{ marginLeft: "30px" }}>참가</button>
        </div>
        <div className="group-contents flex-row">
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">스터디명</div>
            <div className="type">유형</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>3 / 5</div>
          <button style={{ marginLeft: "30px" }}>참가</button>
        </div>
        <div className="group-contents flex-row">
          <div className="study-name" style={{ marginLeft: "30px" }}>
            <div className="name">스터디명</div>
            <div className="type">유형</div>
          </div>
          <div style={{ width: "40px", marginLeft: "100px" }}>3 / 5</div>
          <button style={{ marginLeft: "30px" }}>참가</button>
        </div>
      </div>
    </div>
  );
}

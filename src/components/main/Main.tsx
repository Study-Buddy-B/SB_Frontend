import React, { useState, useRef, useLayoutEffect } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
import { SlSettings } from "react-icons/sl";

import "../../assets/css/main.css";
import Modal from "../modal/Modal";

export default function Main() {
  const cookies = new Cookies();
  const token = cookies.get("uuid");
  const targetRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [sit, setSit] = useState(15.7);
  const [goal, setGoal] = useState(20);
  const [gesture, setGesture] = useState(true);
  const [temperature, setTemperature] = useState(18);
  const [modalOpen, setModalOpen] = useState(false);
  const env =
    temperature < 18
      ? "! 온도를 올려주세요."
      : temperature > 21
      ? "! 온도를 내려주세요."
      : "! 적당한 온도입니다.";
  const envClass =
    env === "! 적당한 온도입니다."
      ? "color-grey"
      : env === "! 온도를 내려주세요."
      ? "color-red"
      : "color-blue";

  const closeModal = () => setModalOpen(false);

  useLayoutEffect(() => {
    setLoading(true);
    const getTempPosture = setInterval(async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/temperature`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setTemperature(res.data.current);
          setLoading(false);
        });

      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/posture`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setGesture(res.data.isAppropriate);
        });
    }, 1000);

    return () => clearInterval(getTempPosture);
  }, []);

  useLayoutEffect(() => {
    const getTime = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_HOST}/api/v1/users`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setSit(res.data.curTime);
          setGoal(res.data.tarTime);
        });
    };
    getTime();
  }, [targetRef.current?.value]);

  const completeClickHandler = () => {
    const postTime = async () => {
      await axios
        .post(
          `${process.env.REACT_APP_SERVER_HOST}/api/v1/users/time`,
          {
            time: targetRef.current?.value,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          closeModal();
        });
    };
    postTime();
  };

  if (loading) return <div style={{ textAlign: "center" }}>...loAdiNg...</div>;

  return (
    <div className="main">
      <div className="study-time-wrapper">
        <div className="flex-row">
          <div className="main-title">오늘 공부시간</div>
          <div
            style={{
              marginLeft: "50px",
              marginTop: "3px",
              color: "#FF9999",
              cursor: "pointer",
            }}
          >
            <SlSettings onClick={() => setModalOpen(true)} />
          </div>
          {modalOpen && (
            <Modal closeModal={closeModal}>
              <div style={{ fontSize: "20px" }}>목표 공부시간 설정</div>
              <input
                ref={targetRef}
                className="target-time-input"
                placeholder=""
              />
              <span> h</span>
              <div className="modal-complete-btn">
                <button onClick={completeClickHandler}>완료</button>
              </div>
            </Modal>
          )}
        </div>
        <div className="flex-row study-time">
          <div className="font-40">{sit}h</div>
          <div className="goal-time"> / {goal}h</div>
        </div>
      </div>
      <div>
        <div className="environment-wrapper" style={{ marginTop: "30px" }}>
          <div className="main-title">현재 공부상태</div>
          <div>온도</div>
          <div className="font-30">{temperature}℃</div>
          <div className={"font-16 " + envClass}>{env}</div>
          <div className="margin-top-30">
            <div>자세</div>
            <div className="flex-row">
              <div className="font-30" style={{ marginRight: "100px" }}>
                {gesture ? "Good" : "Bad"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

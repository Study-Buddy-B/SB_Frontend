import React, { useRef, useState, Dispatch, SetStateAction } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
import { JsxElement } from "typescript";

interface Add {
  closeModal: () => void;
  setIsAdd: Dispatch<SetStateAction<number>>;
}

export default function Add(props: Add) {
  const cookies = new Cookies();
  const token = cookies.get("uuid");

  const nameRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const targetRef = useRef<HTMLInputElement>(null);

  const [fail, setFail] = useState(false);
  const [type, setType] = useState("");

  const types = [
    { id: 0, name: "영어공부" },
    { id: 1, name: "취업준비" },
    { id: 2, name: "모각코" },
    { id: 3, name: "공무원준비" },
    { id: 4, name: "임용고시" },
  ];

  const completeClickHandler = async () => {
    if (
      nameRef.current?.value !== "" &&
      type !== "" &&
      targetRef.current?.value !== "" &&
      maxRef.current?.value !== ""
    ) {
      setFail(false);
      await axios
        .post(
          `${process.env.REACT_APP_SERVER_HOST}/api/v1/group`,
          {
            name: nameRef.current?.value,
            time: targetRef.current?.value,
            type: type,
            maxPerson: maxRef.current?.value,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          props.closeModal();
          props.setIsAdd(res.data.groupId);
        });
    } else {
      setFail(true);
    }
  };

  const renderType = (): JSX.Element[] => {
    const typeInput = types.map((type, i) => {
      return (
        <div key={i}>
          <label>
            <input
              type="checkbox"
              value={type.id}
              onChange={({ target }) => setType(target.value)}
            />
            {" " + type.name}
          </label>
        </div>
      );
    });
    return typeInput;
  };

  return (
    <>
      <div>
        <input ref={nameRef} placeholder="그룹명" />
        <input ref={maxRef} placeholder="최대인원" />
        <input ref={targetRef} placeholder="목표시간" />
        {renderType()}
      </div>
      {fail && (
        <div style={{ color: "red", fontSize: "15px", marginTop: "3px" }}>
          입력란을 모두 입력해주세요!
        </div>
      )}
      <div className="modal-complete-btn">
        <button onClick={completeClickHandler}>완료</button>
      </div>
    </>
  );
}

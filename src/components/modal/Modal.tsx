import React, { Dispatch, SetStateAction } from "react";
import { VscClose } from "react-icons/vsc";
import { JsxElement } from "typescript";

import "../../assets/css/modal.css";

interface Modal {
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal(props: Modal) {
  return (
    <div className="Modal-wrapper">
      <div className="Modal">
        <div className="vsc" onClick={props.closeModal}>
          <VscClose />
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Close } from "@styled-icons/material-outlined/Close";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
  position: relative;
  background: rgb(17, 138, 178);
  border-radius: 4px;
  margin: 150px auto;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 40px 0px;
  max-width: 450px;
`;

const ModalCloseIcon = styled(Close)`
  height: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
  color: rgb(255, 255, 255);
  transition: 0.2s color;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalOverlay onClick={props.closeModal} />
      <ModalContent>
        <ModalCloseIcon onClick={props.closeModal} />
        {props.children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("modal-root")
  );
};

export default Modal;

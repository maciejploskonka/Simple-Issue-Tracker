import React, { useState } from "react";

import Modal from "./Modal";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const RenderModal = (props) => (
    <>{isVisible && <Modal closeModal={hideModal}>{props.children}</Modal>}</>
  );

  return {
    showModal,
    hideModal,
    RenderModal,
  };
};

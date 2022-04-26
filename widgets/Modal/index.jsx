import Modal from "react-modal";

const CommonModal = ({ open, closeModal, children }) => {
  const customStyles = {
    content: {
      background: "rgb(243 ,232 ,255, 1)",
      color: "rgb(107 ,33 ,168 , 1)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "0",
    },
    overlay: {
      backgroundColor: "rgb(205, 208, 208,0.55)",
    },
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default CommonModal;

import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = ({ children, closeModal }) => {
  return ReactDom.createPortal(
    <div className="modal-wrapper" onClick={closeModal}>
      {children}
    </div>,
    document.body
  );
};

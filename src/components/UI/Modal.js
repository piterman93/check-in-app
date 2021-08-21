import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../../styles/Modal.scss";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const Overlay = ({ passenger, ID, onClose, onConfirm }) => {
  return (
    <div className="overlay">
      <h2>
        {" "}
        Are you sure you want to check in <span>{passenger}</span> with seat
        number: <span>{ID}</span> ?
      </h2>

      <div className="overlay__actions">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <button className="submit" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ passenger, checkInID, onClose, onConfirm }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay
          passenger={passenger}
          ID={checkInID}
          onClose={onClose}
          onConfirm={onConfirm}
        />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

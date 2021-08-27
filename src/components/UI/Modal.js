import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../../styles/Modal.scss";
import "../../index.scss";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const Overlay = ({
  passengerName,
  ID,
  onClose,
  onConfirmCheckIn,
  onUndoCheckIn,
  passCheckedIn,
}) => {
  return (
    <div className="overlay">
      {!passCheckedIn && (
        <h2>
          {" "}
          Are you sure you want to check in/change place for{" "}
          <span>{passengerName}</span> for seat number: <span>{ID}</span> ?
        </h2>
      )}
      {passCheckedIn && (
        <h2>
          {" "}
          Are you sure you want to undo check in passenger{" "}
          <span>{passengerName}</span> from seat number: <span>{ID}</span> ?
        </h2>
      )}

      <div className="button__actions">
        <button type="button" onClick={onClose}>
          Close
        </button>
        {!passCheckedIn && (
          <button className="submit" onClick={onConfirmCheckIn}>
            Confirm
          </button>
        )}
        {passCheckedIn && (
          <button className="submit" onClick={onUndoCheckIn}>
            Undo Check in
          </button>
        )}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({
  passengerName,
  checkInID,
  onClose,
  onConfirmCheckIn,
  onUndoCheckIn,
  passCheckedIn,
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay
          passengerName={passengerName}
          ID={checkInID}
          onClose={onClose}
          onConfirmCheckIn={onConfirmCheckIn}
          passCheckedIn={passCheckedIn}
          onUndoCheckIn={onUndoCheckIn}
        />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

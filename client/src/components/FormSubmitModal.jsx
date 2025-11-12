import React from "react";
import {Button , Modal} from "react-bootstrap"

function FormSubmitModal({ showState, handleClose, title, body, negativeBtn, positiveBtn, handleSubmit }) {
  return (
    <>
      <Modal show={showState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {negativeBtn}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {positiveBtn}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormSubmitModal;

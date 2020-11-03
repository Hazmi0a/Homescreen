import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Modal, ProgressBar } from "react-bootstrap";

export const SendingFax = ({ phoneNumber, documentCount, progress }) => {
  const [show, setShow] = useState(true);
  const { t, i18n } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("sending_fax")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {t("to")} {phoneNumber}
        </Modal.Body>
        <Modal.Body>
          {t("number_of_documents")} {documentCount}
        </Modal.Body>
        <Modal.Body>
          <ProgressBar animated now={progress} label={`${progress}%`} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {t("cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

SendingFax.defaultProps = {
  phoneNumber: "0506065978",
  documentCount: "1",
  progress: 45,
};

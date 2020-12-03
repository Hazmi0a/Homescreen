import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const RecievingFax = ({ phoneNumber, documentCount }) => {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("recieving_fax")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {t("from")} {phoneNumber}
        </Modal.Body>
        <Modal.Body>
          {t("document")} {documentCount}
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

RecievingFax.defaultProps = {
  phoneNumber: "0506065978",
  documentCount: "1",
};

RecievingFax.propsTypes = {
  phoneNumber: String,
  documentCount: Number,
};

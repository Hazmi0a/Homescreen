import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { fas } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";


export const DialogBox = ({message}) => {
    
  // const [show, setShow] = useState(false);
  // const [title, setTitle] = useState("");
  // const [message, setMessage] = useState("");
  const { t, i18n } = useTranslation();
  var setShow = true;
  const handleClose = () => {setShow = false};
  // const handleShow = () => setShow(true);
  useEffect(() => {
  
  }, []);

  return (
    <>
      <Modal centered show={setShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t(message.Title)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {t(message.Message)} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {t("ok")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DialogBox.defaultProps = {
  phoneNumber: "0506065978",
  documentCount: "1",
};

DialogBox.propsTypes = {
  phoneNumber: String,
  documentCount: Number,
};

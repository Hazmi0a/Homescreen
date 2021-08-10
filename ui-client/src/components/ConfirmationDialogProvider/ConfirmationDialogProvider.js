import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { fas } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";

const ConfirmationDialog = ({
  open,
  title,
  message,
  onConfirm,
  onDismiss,
  type,
}) => {
  const { t, i18n } = useTranslation();

  // based on the type of the dialog wanted, 0 without action buttons, 1 with OK button, and 2 for instructions
  if (type == 0) {
    return (
      <>
        <Modal centered show={open} onHide={onDismiss}>
          <Modal.Header>
            <Modal.Title>{t(title)}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{t(message)}</Modal.Body>
        </Modal>
      </>
    );
  }

  if (type == 1) {
    return (
      <>
        <Modal centered show={open} onHide={onDismiss}>
          <Modal.Header>
            <Modal.Title>{t(title)}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{t(message)}</Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={onDismiss}>Cancel</Button> */}
            <Button variant="primary" onClick={onConfirm}>
              {t("ok")}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  if (type == 2) {
    <Modal centered show={open} onHide={onDismiss}>
      <Modal.Header>
        <Modal.Title>{t(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t(message)}
        <p>{t("insert_document_in_the_connected_fax")}</p>
        <p>{t("call_number_followed_by_#")}</p>
        <p>{t("iniaite_call")}</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={onDismiss}>Cancel</Button> */}
        <Button variant="primary" onClick={onConfirm}>
          {t("ok")}
        </Button>
      </Modal.Footer>
    </Modal>;
  }

  // return type == 0 ? (
  //   <>
  //     <Modal centered show={open} onHide={onDismiss}>
  //       <Modal.Header>
  //         <Modal.Title>{t(title)}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>{t(message)}</Modal.Body>
  //     </Modal>
  //   </>
  // ) : type == 1 ? (
  //   <>
  //     {" "}
  //     <Modal centered show={open} onHide={onDismiss}>
  //       <Modal.Header>
  //         <Modal.Title>{t(title)}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>{t(message)}</Modal.Body>
  //       <Modal.Footer>
  //         {/* <Button onClick={onDismiss}>Cancel</Button> */}
  //         <Button variant="primary" onClick={onConfirm}>
  //           {t("ok")}
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </>
  // ) : (
  //   <Modal centered show={open} onHide={onDismiss}>
  //     <Modal.Header>
  //       <Modal.Title>{t(title)}</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       {t(message)}
  //       <p>{t("insert_document_in_the_connected_fax")}</p>
  //       <p>{t("call_number_followed_by_#")}</p>
  //       <p>{t("iniaite_call")}</p>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       {/* <Button onClick={onDismiss}>Cancel</Button> */}
  //       <Button variant="primary" onClick={onConfirm}>
  //         {t("ok")}
  //       </Button>
  //     </Modal.Footer>
  //   </Modal>
  // );
};

const ConfirmationDialogContext = React.createContext({});

const ConfirmationDialogProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogConfig, setDialogConfig] = React.useState({});
  const { t, i18n } = useTranslation();

  const openDialog = ({ title, message, type, actionCallback }) => {
    console.log("openDialog -> setDialogOpen", setDialogOpen);
    console.log("openDialog -> dialogOpen", dialogOpen);
    setDialogOpen(true);
    setDialogConfig({ title, message, type, actionCallback });
  };

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig({});
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig.actionCallback(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig.actionCallback(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={{ openDialog }}>
      <ConfirmationDialog
        open={dialogOpen}
        title={dialogConfig?.title}
        message={dialogConfig?.message}
        type={dialogConfig?.type}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  );
};

const useConfirmationDialog = () => {
  const { openDialog } = React.useContext(ConfirmationDialogContext);

  const getConfirmation = ({ ...options }) =>
    new Promise((res) => {
      openDialog({ actionCallback: res, ...options });
    });

  return { getConfirmation };
};

export default ConfirmationDialog;
export { ConfirmationDialogProvider, useConfirmationDialog };

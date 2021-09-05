import React, { useState, useContext } from "react";

import AuthContext from "../Auth/Context";
import { useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";

const SocketManager = (socket) => {
  const { user, setUser } = useContext(AuthContext);
  const { getConfirmation } = useConfirmationDialog();

  const newMessage = () => {
    socket.on("new message", (data) => {
      getConfirmation({
        title: data.title,
        message: data.message,
        type: data.type,
      });
      console.log(data.type);
    });
  };
  const authenticated = () => {
    socket.on("Authenticated", (data) => {
      console.log(data);
      setUser(data);
    });
  };
};

export default SocketManager;

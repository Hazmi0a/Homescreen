import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

import {
  faHome,
  faArrowLeft,
  faCog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  Image,
  Form,
  FormControl,
  NavDropdown,
  OverlayTrigger,
  Overlay,
  Popover,
  Tooltip,
} from "react-bootstrap";
import { RecievingFax } from "../components/RecievingFax/RecievingFax";
import { SendingFax } from "../components/SendingFax/SendingFax";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { Settings } from "../components/Settings/Settings";
import { DialogBox } from "../components/DialogBox/DialogBox";

import { useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";

let socket;
export default function Home() {
  const [message, setMessage] = useState({});
  const [settings, setSettings] = useState(false);

  // const [show, setShow] = useState(false);
  // const ENDPOINT = process.env.API_ENDPOINT;
  // const { getConfirmation } = useConfirmationDialog();
  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.on("new message", (data) => {
  //     getConfirmation({
  //       title: data.title,
  //       message: data.message,
  //       type: data.type,
  //     });
  //     console.log(data.type);
  //   });
  //   // CLEAN UP THE EFFECT
  //   return () => socket.disconnect();
  //   //
  // }, [ENDPOINT]);

  const handleSettingClick = () => {
    console.log("Settings");
    setSettings(!settings);
  };

  return (
    <>
      <StatusBar />
      <SendingFax />
      <RecievingFax />
      <Image
        src="/ntis.png"
        alt="Picture of the author"
        width={1250}
        height={650}
      />
      {/* {settings && <Settings />}
      <NavigationBar settingsPage={handleSettingClick} /> */}
    </>
  );
}

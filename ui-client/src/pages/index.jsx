import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import amen from "../images/amen.png";
import settingsImage from "../images/settings.png";
import search from "../images/search.png";
import phoneCall from "../images/phone-call.png";

import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { RecievingFax } from "../components/RecievingFax/RecievingFax";
import { SendingFax } from "../components/SendingFax/SendingFax";
import { useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";
import { useMediaQuery } from "react-responsive";

import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
export default function Home() {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState({});
  const [settings, setSettings] = useState(false);
  //const [connection, setConnection] = useState(null);
  //const [ConnID, setConnID] = useState(null);
  const Confirmation = {
    title: "call_procedure",
    message: "",
    type: 2,
  };
  const { getConfirmation } = useConfirmationDialog();
  // const [show, setShow] = useState(false);
  // const ENDPOINT =
  //   process.env.REACT_APP_API_ENDPOINT || "http://localhost:4001/";
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
  // useEffect(() => {
  //   const newConnection = new HubConnectionBuilder()
  //     .withUrl("https://localhost:5001/notificationHub")
  //     .withAutomaticReconnect()
  //     .build();

  //   setConnection(newConnection);
  // }, []);
  // useEffect(() => {
  //   configSocket();
  // }, []);
  // const configSocket = async () => {
  //   try {
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imhhem1pMGFiIiwicm9sZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6IkFiZHVsbGFoIiwiZmFtaWx5X25hbWUiOiJBbGhhem1pIiwiZW1haWwiOiJlbWFpbDJAZW1haWwuY29tIiwibmFtZWlkIjoiMTkiLCJuYmYiOjE2MTgxMzk5ODksImV4cCI6MTYxODE0MzU4OSwiaWF0IjoxNjE4MTM5OTg5fQ.8SPYnX8ETH8wisGuc-X2Xv8Bxkj7K9qSGk8Cv4lkVvM";
  //     const socketConnection = new HubConnectionBuilder()
  //       .configureLogging(LogLevel.Debug)
  //       .withUrl("https://localhost:5001/notificationHub", {
  //         accessTokenFactory: () => token,
  //       })
  //       .build();
  //     await socketConnection.start();
  //     setConnection(socketConnection);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (connection) {
  //     connection.on("ReceiveMessage", (message) => {
  //       getConfirmation({
  //         title: message.title,
  //         message: message,
  //         type: message.type,
  //       });
  //     });
  //     connection.on("ReceiveConnID", (message) => {
  //       setConnID(message);
  //       getConfirmation({
  //         title: message.title,
  //         message: message,
  //         type: message.type,
  //       });
  //     });
  //   }
  // }, [connection]);

  const handleSettingClick = () => {
    setSettings(!settings);
  };
  // const handleMessage = () => {
  //   const message = JSON.stringify({
  //     From: ConnID,
  //     To: "",
  //     Message: "sendMessage.value",
  //   });
  //   connection && connection.invoke("SendMessageAsync", message);
  // };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  //All claaNames will be found in index.css
  return (
    <>
      {/* <StatusBar /> */}
      <SendingFax />
      <RecievingFax />
      <RemoveScrollBar />
      <div style={{ position: "relative" }}>
        <div>
          <Image
            src={amen}
            alt="Picture of amen"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <Container fluid className="indexContainer">
          <Row display="flex" style={{ height: "100%", alignItems: "center" }}>
            <Col>
              <Card
                bg="dark"
                opacity=".6"
                style={{
                  width: "13rem",
                  float: "none",
                  margin: "0 auto",
                }}
              >
                <Button
                  opacity=".6"
                  variant="outline-dark"
                  //onClick={() => handleMessage()}
                >
                  <Card.Img
                    variant="top"
                    className="mt-2"
                    src={search}
                    style={{ width: "8rem" }}
                  />
                </Button>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {t("status")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card href="/" bg="dark" className="cardSizePosition">
                <Button
                  opacity=".6"
                  variant="outline-dark"
                  onClick={() => getConfirmation(Confirmation)}
                >
                  <Card.Img
                    variant="top"
                    className="mt-2"
                    src={phoneCall}
                    style={{ width: "8rem" }}
                  />
                </Button>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {t("call_procedure")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card href="/" bg="dark" className="cardSizePosition">
                <Link to="/Settings" className="centerItems">
                  <Card.Img
                    variant="top"
                    className="mt-2"
                    src={settingsImage}
                    style={{ width: "8rem" }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {t("settings")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* {settings && <Settings />}
      <NavigationBar settingsPage={handleSettingClick} /> */}
    </>
  );
}

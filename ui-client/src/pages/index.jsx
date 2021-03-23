import React, { useState, useRef, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import { useTranslation } from "react-i18next";

import amen from "../images/amen.png";
import settingsImage from "../images/settings.png";
import search from "../images/search.png";
import phoneCall from "../images/phone-call.png";

import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Link } from "react-router-dom";
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
  CardDeck,
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
import { StatusBar } from "../components/StatusBar/StatusBar";
import { useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";
let socket;
export default function Home() {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState({});
  const [settings, setSettings] = useState(false);
  const Confirmation = {
    title: "call_procedure",
    message: "",
    type: 2,
  };
  // const [show, setShow] = useState(false);
  const ENDPOINT = process.env.API_ENDPOINT;
  const { getConfirmation } = useConfirmationDialog();
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("new message", (data) => {
      getConfirmation({
        title: data.title,
        message: data.message,
        type: data.type,
      });
      console.log(data.type);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, [ENDPOINT]);

  const handleSettingClick = () => {
    setSettings(!settings);
  };

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
              height: "100%",
            }}
          ></Image>
        </div>
        <Container
          fluid
          style={{ top: "20%", bottom: "20%", position: "absolute" }}
        >
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
                <Button opacity=".6" variant="outline-dark" href="/">
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
              <Card
                href="/"
                bg="dark"
                style={{
                  width: "13rem",
                  float: "none",
                  margin: "0 auto",
                }}
              >
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
              <Card
                href="/"
                bg="dark"
                style={{
                  width: "13rem",
                  float: "none",
                  margin: "0 auto",
                }}
              >
                <Link
                  to="/Settings"
                  style={{ float: "none", margin: "0 auto" }}
                >
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

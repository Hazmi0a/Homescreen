import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Col,
  ListGroup,
  Item,
  Row,
  Form,
  NavDropdown,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";
import { i18 } from "react-i18next";
import { LangContext, context } from "../languageContext";

export const Settings = () => {
  const { t, i18n } = useTranslation();
  const ENDPOINT = process.env.API_ENDPOINT;
  const { getConfirmation } = useConfirmationDialog();

  const [contextPad, setContextPad] = useContext(LangContext);
  const [lang, setLang] = useState("pad RTL");

  // console.log("pad", context.pad, setContext(...context, (pad = "pad LTR")));
  console.log("pad", context.pad);

  useEffect(() => {
    let socket = io(ENDPOINT);
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

  const handleChangeLand = (e) => {
    // i18n.changeLanguage("ar");
    // setLangButton(false);
    // const currentLang = i18n.language;
    // if (currentLang === "en") {
    //   i18n.changeLanguage("ar");
    //   setLang("pad RTL");
    // } else if (currentLang === "ar") {
    //   i18n.changeLanguage("en");
    //   setLang("pad LTR");
    // }
    const currentLang = i18n.language;
    if (currentLang === "en") {
      i18n.changeLanguage("ar");
      setContextPad({ pad: "pad RTL" });
    } else if (currentLang === "ar") {
      i18n.changeLanguage("en");
      setContextPad({ pad: "pad LTR" });
    }
  };
  return (
    <LangContext.Consumer>
      {(context) => (
        <div className={contextPad.pad}>
          <ListGroup variant="flush" className="listGroupFontSize">
            <ListGroup.Item action>{t("change_time")}</ListGroup.Item>
            <ListGroup.Item action={contextPad.pad} onClick={handleChangeLand}>
              {t("change_lang")}
            </ListGroup.Item>
            <ListGroup.Item action>{t("change_dial_tone")}</ListGroup.Item>
            <ListGroup.Item action>{t("change_connection")}</ListGroup.Item>
            <ListGroup.Item action>{t("change_speed")}</ListGroup.Item>
            <ListGroup.Item action>
              {" "}
              <DropdownButton
                style={{ width: "100%" }}
                width="100%"
                variant="secondary"
                id="dropdown-basic-button"
                title={t("change_speed")}
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </ListGroup.Item>
          </ListGroup>

          <br />

          <ListGroup className="listGroupFontSize" variant="flush">
            <Link to="/settings/SystemInfo">
              <ListGroup.Item action>{t("system_info")} </ListGroup.Item>
            </Link>
            <ListGroup.Item action>{t("system_reset")}</ListGroup.Item>
          </ListGroup>
        </div>
      )}
    </LangContext.Consumer>
  );
};

import React, { useEffect, useState,  } from "react";
import io from "socket.io-client";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import {
  Col,
  ListGroup,
  Row,
  Form,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";
import { i18 } from "react-i18next";



export const Settings = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("pad RTL");
  const ENDPOINT = process.env.API_ENDPOINT;
  const { getConfirmation } = useConfirmationDialog();

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
    const currentLang = i18n.language;
    if (currentLang === "en") {
      i18n.changeLanguage("ar");

      setLang("pad RTL");
    } else if (currentLang === "ar") {
      i18n.changeLanguage("en");
      setLang("pad LTR");
    }
  };

  return (
    <div className={lang}>
      <ListGroup variant="flush" className={lang}>
        <ListGroup.Item action>{t("change_time")}</ListGroup.Item>

        <ListGroup.Item action={lang} onClick={handleChangeLand}>
          {t("change_lang")}
        </ListGroup.Item>
        <ListGroup.Item action>{t("change_dial_tone")}</ListGroup.Item>
        <ListGroup.Item action>{t("change_connection")}</ListGroup.Item>
        <ListGroup.Item action>{t("change_speed")}</ListGroup.Item>
      </ListGroup>
      <br />
      <ListGroup variant="flush">
        <ListGroup.Item action>{t("system_info")}</ListGroup.Item>
        <ListGroup.Item action>{t("system_reset")}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}


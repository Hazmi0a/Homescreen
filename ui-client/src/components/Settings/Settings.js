import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ListGroup } from "react-bootstrap";
export const Settings = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="pad">
      <ListGroup variant="flush" className="bg-dark">
        <ListGroup.Item action>{t("change_time")}</ListGroup.Item>
        <ListGroup.Item action>{t("change_lang")}</ListGroup.Item>
        <ListGroup.Item action>{t("change_dial_tone")}</ListGroup.Item>
        <ListGroup.Item action>{t("change_connection")}</ListGroup.Item>
        <ListGroup.Item action>{t("change_speed")}</ListGroup.Item>
      </ListGroup>
      <br />
      <ListGroup variant="flush">
        <ListGroup.Item action>{t("document_processor")}</ListGroup.Item>
        <ListGroup.Item action>{t("system_info")}</ListGroup.Item>
        <ListGroup.Item action>{t("system_reset")}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

Settings.propTypes = {};

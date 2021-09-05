import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ListGroup, Table } from "react-bootstrap";

export const SystemInfo = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("pad RTL");
  const currentLanguage = i18n.language;
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

  const languageEN = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage("en");
    console.log(i18n.changeLanguage("en"));
  };

  const languageAR = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage("ar");
    console.log(i18n.changeLanguage("ar"));
  };

  return currentLanguage === "en" ? (
    <div className={lang}>
      <div>
        <ListGroup style={{ fontSize: "18px" }} variant="flush">
          <ListGroup.Item
            width="100%"
            style={{ textAlign: "center", width: "100%" }}
            onClick={languageEN}
          >
            {t("system_info")}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <br />

      <Table style={{ fontSize: "18px" }} variant="dark" hover>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>{t("device_name")}</th>
            <th style={{ color: "gray" }}>{t("amen")}</th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>{t("model")}</th>
            <th style={{ color: "gray" }}>108</th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>{t("ram")}</th>
            <th style={{ color: "gray" }}>2 GB</th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>{t("resolution")}</th>
            <th style={{ color: "gray" }}>1200x600</th>
          </tr>
        </thead>
      </Table>

      <br />
      <Table variant="dark" hover>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>{t("version")}</th>
            <th style={{ color: "gray" }}>1.0</th>
          </tr>
        </thead>
      </Table>

      <br />
    </div>
  ) : (
    <div className={lang}>
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item
            width="100%"
            style={{ textAlign: "center", width: "100%" }}
          >
            {t("system_info")}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <br />

      <Table variant="dark" hover>
        <thead>
          <tr>
            <th style={{ color: "gray", textAlign: "left" }}>{t("amen")}</th>
            <th onClick={languageAR} style={{ textAlign: "right" }}>
              {t("device_name")}
            </th>
          </tr>
          <tr>
            <th style={{ color: "gray", textAlign: "left" }}>108</th>

            <th style={{ textAlign: "right" }}>{t("model")}</th>
          </tr>
          <tr>
            <th style={{ color: "gray", textAlign: "left" }}>2 GB</th>
            <th style={{ textAlign: "right" }}>{t("ram")}</th>
          </tr>
          <tr>
            <th style={{ color: "gray", textAlign: "left" }}>1200x600</th>

            <th style={{ textAlign: "right" }}>{t("resolution")}</th>
          </tr>
        </thead>
      </Table>

      <br />
      <Table variant="dark" hover>
        <thead>
          <tr>
            <th style={{ color: "gray", textAlign: "left" }}>1.0</th>
            <th style={{ textAlign: "right" }}>{t("version")}</th>
          </tr>
        </thead>
      </Table>

      <br />
    </div>
  );
};

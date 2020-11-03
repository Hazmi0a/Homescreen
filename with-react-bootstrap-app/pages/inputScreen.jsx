import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Keyboard from "react-simple-keyboard";
import Arabic from "../locate/ar/arabic";
import English from "../locate/en/english";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  Form,
} from "react-bootstrap";
import arabic from "../locate/ar/arabic";

export default function inputScreen() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const [lang, setLang] = useState(English);
  const [rtl, setRtl] = useState(false);
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "@") handleLangChange();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  const handleLangChange = () => {
    lang === arabic
      ? setLang(English) && setRtl(false)
      : setLang(Arabic) && setRtl(true);
  };

  return (
    <>
      <h3 className="inputH3">Password</h3>
      <Form className="input">
        <Form.Control value={input} onChange={onChangeInput} />
      </Form>
      <div className="keyboard">
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          theme="hg-theme-default myTheme1"
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
          layout={lang}
          rtl={rtl}
        />
      </div>
    </>
  );
}

inputScreen.propTypes = {};

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";
import PropTypes from "prop-types";

import {
  Container,
  Button,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Overlay,
  Tooltip,
} from "react-bootstrap";

export const StatusBar = () => {
  const ENDPOINT = process.env.API_ENDPOINT;
  const [show, setShow] = useState(false);
  const [currentMode, setCurrentMode] = useState("T.30");
  const target = useRef(null);
  const t30 = "T.30";
  const t38 = "T.38";

  const handleModeChange = (mode) => {
    const socket = io(ENDPOINT);
    socket.emit("new mode", mode, (ack) => {
      console.log(ack);
      setCurrentMode(ack);
      
    });
    
  }
  return (
    <Container>
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        fixed="top"
        className="justify-content-between statbar bg-dark-trans"
      >
        <Button
          size="sm"
          variant="link"
          ref={target}
          onClick={() => setShow(!show)}
        >
          <FontAwesomeIcon icon={faSun} size="lg" />
        </Button>
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              <Form>
                <Form.Control type="range" custom />
              </Form>
            </Tooltip>
          )}
        </Overlay>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            11:00 AM
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title={currentMode} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={() => handleModeChange(t30)}>{t30}</NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleModeChange(t38)}>{t38}</NavDropdown.Item>
         
        </NavDropdown>
      </Navbar>
    </Container>
  );
};

StatusBar.propTypes = {};

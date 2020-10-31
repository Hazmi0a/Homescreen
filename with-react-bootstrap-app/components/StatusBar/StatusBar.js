import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
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
  const [show, setShow] = useState(false);
  const target = useRef(null);
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
        <NavDropdown title="T.30" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">T.30</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">T.38</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </Container>
  );
};

StatusBar.propTypes = {};

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import io from "socket.io-client";
let socket;
export const NavigationBar = (settingsPage) => {
  const backFunction = () => {
    // if (router.pathname != "/") {
    //   router.back();
    // }
  };
  return (
    <>
      <Navbar
        className="justify-content-center"
        style={{ height: "70px" }}
        fixed="bottom"
        variant="dark"
        bg="dark"
      >
        <Nav fill variant="pills">
          <Row>
            <Col style={{ marginRight: "10rem" }}>
              <Link style={{}} onClick={() => backFunction()}>
                <FontAwesomeIcon size="3x" icon={faArrowLeft} />
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <FontAwesomeIcon size="3x" icon={faHome} />
              </Link>
            </Col>
            <Col style={{ marginLeft: "10rem" }}>
              <Link to="/settings">
                <FontAwesomeIcon size="3x" icon={faCog} />
              </Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </>
  );
};

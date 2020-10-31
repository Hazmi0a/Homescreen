import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft, faCog } from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Navbar, Nav } from "react-bootstrap";

export const NavigationBar = () => {
  const router = useRouter();

  const backFunction = () => {
    if (router.pathname != "/") {
      router.back();
    }
  };
  return (
    <>
      <Navbar expand="lg" fixed="bottom" variant="dark" bg="dark">
        <Nav className="justify-content-center" variant="pills">
          <Row>
            <Col>
              <Nav.Link onClick={() => backFunction()}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faHome} />
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="/settings">
                <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </>
  );
};

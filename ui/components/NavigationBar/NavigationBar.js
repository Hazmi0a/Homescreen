import React, {useEffect} from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft, faCog } from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Navbar, Nav } from "react-bootstrap";
import io from "socket.io-client";
let socket;
export const NavigationBar = (settingsPage) => {
  const router = useRouter();
  
  const test = () => {
    console.log(settingsPage);
  };
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
              <Nav.Link onSelect={() => settingsPage()}>
                <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </>
  );
};
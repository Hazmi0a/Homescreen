import Head from "next/head";
import React, { useState, useRef } from "react";

import {
  faHome,
  faArrowLeft,
  faCog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  Image,
  Form,
  FormControl,
  NavDropdown,
  OverlayTrigger,
  Overlay,
  Popover,
  Tooltip,
} from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Image
        src="/ntis.png"
        alt="Picture of the author"
        width={1250}
        height={650}
      />
    </>
  );
}

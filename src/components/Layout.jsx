import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <Container fluid style={{ height: "100vh", padding: 0 }}>
      <Row style={{ height: "100%" }}>
        <Col md={2} style={{ padding: 0 }}>
          <Sidebar />
        </Col>
        <Col md={10} style={{ padding: 0, overflowY: "auto" }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

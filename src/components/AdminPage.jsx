import React from "react";
import OrdersTable from "./OrdersTable";
import { Container, Row, Col } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center p-4">
          <h1>Control Panel</h1>
          <h5>Manage your orders and more</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="p-4">
          <OrdersTable />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;

import Header from "components/navbar";
import React, { ReactElement } from "react";
import { Container, Row } from "reactstrap";
import "./styles/theme.min.css";

const App = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      <Header />
      <Row
        className="d-flex w-100 h-100"
        style={{ backgroundColor: "aliceblue" }}
      />
    </Container>
  );
};

export default App;

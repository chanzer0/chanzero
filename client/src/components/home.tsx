import React, { ReactElement } from "react";
import { Container } from "reactstrap";
import Header from "./navbar";

const Home = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      <Header />
    </Container>
  );
};

export default Home;

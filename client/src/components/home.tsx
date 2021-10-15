import React, { ReactElement } from "react";
import { Container } from "reactstrap";
import Header from "./header/header";

const Home = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      <Header />
    </Container>
  );
};

export default Home;

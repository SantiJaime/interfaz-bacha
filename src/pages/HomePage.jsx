import React from "react";
import { Button, Container } from "react-bootstrap";
import ModalComp from "../components/ModalComp";


const HomePage = () => {
  
  return (
    <Container>
      <div className="d-flex justify-content-evenly mt-5">
        <ModalComp/>
        <Button variant="dark">Gestionar horarios</Button>
        <Button variant="dark">Gestionar días no laborales</Button>
      </div>
    </Container>
  );
};

export default HomePage;

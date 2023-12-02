import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

const ModalComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Agregar nuevo docente
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="fondo sombra">
          <Modal.Header closeButton>
            <Modal.Title>Agrega un nuevo docente aquí</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="nameId">
                <Form.Label>Nombre</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupName">
                    <i className="bi bi-person-circle"></i>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Ejemplo: Juan"
                    type="text"
                    name="name"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastNameId">
                <Form.Label>Apellido</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupName">
                    <i className="bi bi-person-circle"></i>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Ejemplo: González"
                    type="text"
                    name="lastname"
                  />
                </InputGroup>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center">

              <Form.Group className="mb-3" controlId="dniId">
                <Form.Label>DNI</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupDni">
                    <i className="bi bi-person-vcard-fill"></i>
                  </InputGroup.Text>
                  <Form.Control placeholder="12345678" name="dni" />
                </InputGroup>
              </Form.Group>
              <Form.Check
                type="checkbox"
                id="checkId"
                label="Huella capturada"
                className="mb-3 mt-3"
              />
              </div>
              <Form.Group className="mb-3" controlId="roleId">
                <Form.Label>Tipo de docente</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupRole">
                    <i className="bi bi-person-fill-gear"></i>
                  </InputGroup.Text>
                  <Form.Select name="role">
                    <option>Tipo de docente no seleccionado</option>
                    <option value="grado">Docente de grado</option>
                    <option value="materia">Docente de materia</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Agregar docente
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalComp;

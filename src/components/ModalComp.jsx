import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
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
            <Formik
              initialValues={{
                name: "",
                lastname: "",
                dni: "",
                type: "",
                mat: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({ values, handleChange }) => (
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
                  <div className="displayModal">
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
                  <Form.Group className="mb-3" controlId="teacherId">
                    <Form.Label>Tipo de docente</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupTeacher">
                        <i className="bi bi-person-fill-gear"></i>
                      </InputGroup.Text>
                      <Form.Select name="type" onChange={handleChange}>
                        <option value="">
                          Tipo de docente no seleccionado
                        </option>
                        <option value="grado">Docente de grado</option>
                        <option value="materia">Docente de materia</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  {values.type === "grado" ? (
                    <>
                      <h5>Cursos del docente</h5>
                      <hr />
                      <Row>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check1"
                            label="1er Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check2"
                            label="2do Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check3"
                            label="3er Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check4"
                            label="4to Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check5"
                            label="5to Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check6"
                            label="6to Año"
                            className="mb-3"
                          />
                        </Col>
                      </Row>
                    </>
                  ) : values.type === "materia" ? (
                    <Form.Group className="mb-3" controlId="matId">
                      <Form.Label>Materia que da el docente</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="groupMat">
                        <i className="bi bi-clipboard"></i>
                        </InputGroup.Text>
                        <Form.Select name="mat" onChange={handleChange}>
                          <option value="">Materia no seleccionada</option>
                          <option value="Matemática">Matemática</option>
                          <option value="Lengua">Lengua</option>
                          <option value="Biología">Biología</option>
                          <option value="Física">Física</option>
                          <option value="Tecnología">Tecnología</option>
                          <option value="Geografía">Geografía</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  ) : (
                    ""
                  )}
                  {values.type === "materia" && values.mat && (
                    <>
                      <h5>Cursos donde el docente da la materia</h5>
                      <hr />
                      <Row>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check1"
                            label="1er Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check2"
                            label="2do Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check3"
                            label="3er Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check4"
                            label="4to Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check5"
                            label="5to Año"
                            className="mb-3"
                          />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Form.Check
                            type="checkbox"
                            id="check6"
                            label="6to Año"
                            className="mb-3"
                          />
                        </Col>
                      </Row>
                    </>
                  )}
                </Form>
              )}
            </Formik>
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

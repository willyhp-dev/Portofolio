import { Button, Card, Col, ListGroup, Modal, Row } from "react-bootstrap";

import Crud from "../image/Crud.jpeg";
import React, { useState } from "react";
export default function Cards() {
 

  const [showe, setShowe] = useState(false);
  const handleClosee = () => setShowe(false);
  const handleShowe = () => setShowe(true);

  const array = [
    
    {
      index: 5,
      title: "Crud MERN (Frondend and Backend Api",
      github: 
        "https://github.com/willyhp-dev/Crud-Mern-Backend",

      link: "https://crudmernfrontend.herokuapp.com/",
      image: Crud,
      show: showe,
      handleClose: handleClosee,
      handleShow: handleShowe,
      Project: "Project Terakhir Adalah Crud Mongo Express React Nodejs  ",
      Fitur: "",
      Penjelasan: "",
      video:""
    },
  ];
  
  const Cardz = ({
    title,
    github,
    link,
    image,
    key,
    show,
    handleShow,
    handleClose,
    project,
    penjelasan,
    video,
  }) => {
    return (
      <Col key={key} sm={4}>
        <Card style={{ width: "18rem" }} className="mt-3 shadow">
          <Card.Img width={200} height={200} src={image} alt="" />
          <div className ="border"></div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text></Card.Text>
            <Row>
              <Col sm>
                <a href={link} className="btn  btn-outline-primary" element>
                  Preview
                </a>
              </Col>
              <Col sm>
                <>
                  <Button variant="outline-secondary" onClick={handleShow}>
                    Detail
                  </Button>
                  <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    animation={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          <Row>
                            <Col sm={3}>Github</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={8}>
                              <a href={github} element>
                                {github}
                              </a>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col sm={3}>Deskripsi Project</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={8}>{project}</Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col sm={3}>Penjelasan Fitur</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={8}>{penjelasan}</Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                            <Col sm={3}>Video</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={8}>{video}</Col>
                          </Row>
                        </ListGroup.Item>
                     
                      </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  return (
    <div>
      <Card className="p-5 pt-2">
        <Row>
          {array.map((a) => (
            <Cardz
              key={a.index}
              title={a.title}
              link={a.link}
              image={a.image}
              github={a.github}
              show={a.show}
              handleClose={a.handleClose}
              handleShow={a.handleShow}
              project={a.project}
              penjelasan={a.penjelasan}
              video ={a.video}
            />
          ))}
        </Row>
      </Card>
    </div>
  );
}

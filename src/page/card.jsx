import { Button, Card, Col, ListGroup, Modal, Row } from "react-bootstrap";

import Crud from "../image/Crud.jpeg";
import POS from "../images/POS_SYSTEM.png";
import React, { useState } from "react";
export default function Cards() {
 

  const [showe, setShowe] = useState(false);
  const handleClosee = () => setShowe(false);
  const handleShowe = () => setShowe(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const array = [
    {
      index: 1,
      title: "Crud MERN (Frondend and Backend Api",
      github: 
        "https://github.com/willyhp-dev/Crud-Mern-Backend",
      link: "https://crudmernfrontend.herokuapp.com/",
      image: Crud,
      show: show,
      handleClose: handleClose,
      handleShow: handleShow,
      Project: "Project Terakhir Adalah Crud Mongo Express React Nodejs  ",
      Fitur: "",
      Penjelasan: "",
      video:""
    },
    {
      index: 2,
      title: "Study Case POS SYSTEM",
      github: [
        "https://github.com/willyhp-dev/Frontend-POS-System",
        "https://github.com/willyhp-dev/Backend-POS-System"
      ],
      link: "https://symphonious-manatee-550fb5.netlify.app",
      image: POS,
      show: showe,
      handleClose: handleClosee,
      handleShow: handleShowe,
      Project: "Point of sales Pemesanan Makanan",
      teknologi: "Axios, Mongoose, mongodb,reactjs hook,sweetalert, expressjs, JWT",
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
    teknologi,
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
                            <Col sm={3}>Teknologi</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={8}>{teknologi}</Col>
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
              teknologi={a.teknologi}
              video ={a.video}
            />
          ))}
        </Row>
      </Card>
    </div>
  );
}

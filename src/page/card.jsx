import { Button, Card, Col, ListGroup, Modal, Row } from "react-bootstrap";
import biodata from "../image/biodata.jpeg";
import Forms from "../image/Form.jpeg";
import Hook from "../image/Hooks.jpeg";
import Routing from "../image/Routing.jpeg";
import Crud from "../image/Crud.jpeg";
import React, { useState } from "react";
export default function Cards() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showb, setShowb] = useState(false);
  const handleCloseb = () => setShowb(false);
  const handleShowb = () => setShowb(true);

  const [showc, setShowc] = useState(false);
  const handleClosec = () => setShowc(false);
  const handleShowc = () => setShowc(true);

  const [showd, setShowd] = useState(false);
  const handleClosed = () => setShowd(false);
  const handleShowd = () => setShowd(true);

  const [showe, setShowe] = useState(false);
  const handleClosee = () => setShowe(false);
  const handleShowe = () => setShowe(true);

  const array = [
    {
      index: 1,
      title: "Biodata",
      github: "https://github.com/willyhp-dev/Reactjs-Biodata",
      link: "https://cheerful-dodol-0579d4.netlify.app",
      image: biodata,
      show: show,
      handleClose: handleClose,
      handleShow: handleShow,
      project:
        "Project Biodata Menampilkan data Biodata Pribadi, serta menampilkan skill Pribadi Programming, Tujuan membuat project ini untuk mengumpulkan Tugas Eduwork MERN ",
      fitur: "List Biodata Pribadi, dan list Skill Programing pribadi",
      penjelasan: "---",
      video: "",
    },
    {
      index: 2,
      title: "Form and Validation",
      github: "https://github.com/willyhp-dev/Form-Validation-Reactjs",
      link: "https://preeminent-dasik-0f790d.netlify.app",
      image: Forms,
      show: showb,
      handleClose: handleCloseb,
      handleShow: handleShowb,
      project:
        "Project kedua Saya Adalah Register Akun, Pembuatan Project ini untuk pengumpulan tugas Eduwork MERN, Pengerjaan Projectnya secara Individu ",
      fitur: "validata input Emaill Address, Username,No Handphone, Alamat ",
      penjelasan:
        "validata akan memeriksa data Email Address, username,no handphone, alamat Ketika sudah di submit, dan Memeriksa semua isian form apakah semua isian sudah terisi data. Proses ini akan memeriksa satu persatu setiap isian form dan memeriksa datanya",
      video: "",
    },
    {
      index: 3,
      title: "Hooks API",
      github: "https://github.com/willyhp-dev/HooksApi",
      link: "https://willowy-pithivier-e15e4f.netlify.ap",
      image: Hook,
      show: showc,
      handleClose: handleClosec,
      handleShow: handleShowc,
      project:
        "Project ketiga saya adalah Menampilkan Api Menggunakan Funsional Komponen, project ini untuk mengumpulkan tugas Eduwork MERN dan mengerjakan secara individu",
      fitur: "live Search Input ",
      penjelasan:
        "ketika mengetik input search maka otomatis data tersebut akan mencari langsung tanpa harus menunggu loading ",
      video: "",
    },
    {
      index: 4,
      title: "Application Routing",
      github: "https://github.com/willyhp-dev/Eduwork_testing",
      link: "https://scintillating-blancmange-516945.netlify.app",
      image: Routing,
      show: showd,
      handleClose: handleClosed,
      handleShow: handleShowd,
      Project:
        "Project KeEmpat saya adalah Application Admin Routing, Tujuan Dari dari Project ini adalah menghubungan link halaman ke halaman lain, project ini untuk mengumpulkan tugas Eduwork MERN dan mengerjakan secara individu ",
      Fitur: "fitur link,  live search , validation,Toggle ",
      penjelasan:
        " link untuk mengunjungi halaman website lain , live search untuk mencari data api secara langsung tanpa reload website,Validation untuk menvalidasi inputan Register akun ketika semua validasinya sudah terpenuhi semuannya maka akan muncul alert data Sukses, dan Toggle adalah Boolean (True or false),fungsi toggle untuk menampilkan Sidebar dan hide sidebarnya  ",
      video: "",
    },
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
        <Card style={{ width: "18rem" }} className="border-light mt-3">
          <Card.Img width={200} height={200} src={image} alt="" />
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
      <Card bg="primary" className="p-5 pt-2">
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
            />
          ))}
        </Row>
      </Card>
    </div>
  );
}

import { Card, Col, Row } from "react-bootstrap";
import biodata from "../image/biodata.png"
import Forms from "../image/Form.png";
import Hook from "../image/Hooks.png";
import Routing from "../image/Routing.png";
import Crud from "../image/Crud.png";
export default function ards() {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img width={200} height={200} src={biodata} />
            <Card.Body>
              <Card.Title>Biodata</Card.Title>
              <Card.Text>
                <small>https://github.com/willyhp-dev/Reactjs-Biodata</small>
              </Card.Text>
              <a
                href="https://cheerful-dodol-0579d4.netlify.app"
                className="btn btn-primary"
                element
              >
                Preview
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img width={200} height={200} src={Forms} />
            <Card.Body>
              <Card.Title>Form and Validation</Card.Title>
              <Card.Text>
                <small>
                  https://github.com/willyhp-dev/Form-Validation-Reactjs
                </small>
              </Card.Text>
              <a
                href="https://preeminent-dasik-0f790d.netlify.app"
                className="btn btn-primary"
                element
              >
                Preview
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img width={200} height={200} src={Hook}/>
            <Card.Body>
              <Card.Title>Hooks API</Card.Title>
              <Card.Text>
                <small>https://github.com/willyhp-dev/HooksApi</small>
              </Card.Text>
              <a
                href="https://willowy-pithivier-e15e4f.netlify.app"
                className="btn btn-primary"
                element
              >
                Preview
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img width={200} height={200} src={Routing} />
            <Card.Body>
              <Card.Title>Application Routing</Card.Title>
              <Card.Text>
                <small>https://github.com/willyhp-dev/Eduwork_testing</small>
              </Card.Text>
              <a
                href="https://scintillating-blancmange-516945.netlify.app"
                className="btn btn-primary"
                element
              >
                Preview
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img width={200} height={200} src={Crud} />
            <Card.Body>
              <Card.Title>Crud MERN (Frondend and Backend Api)</Card.Title>
              <Card.Text>
                <p><small>https://github.com/willyhp-dev/Crud-Mern-Frontend</small></p>
                <small>https://github.com/willyhp-dev/Crud-Mern-Backend</small>
              </Card.Text>
              <a href="https://crudmernfrontend.herokuapp.com/" className="btn btn-primary" element>
                Preview
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

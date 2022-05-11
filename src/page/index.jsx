import {Container} from "react-bootstrap";
import Cards from "./card";
import Navbars from "./navbar";

export default function Page() {
  return (
    <div>
      <Navbars />
      <Container className="mt-3">
          <Cards/>
      </Container>
    </div>
  );
}

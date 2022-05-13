import { Container, Navbar } from "react-bootstrap";

export default function Navbars() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Portofolio Willyhp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        </Navbar>
    )
}
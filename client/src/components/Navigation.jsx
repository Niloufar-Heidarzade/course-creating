import {
  Container,
  Nav,
  Navbar,
  Image,
  Dropdown,
  Button,
} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import "../style/navigation.css"

function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/apsignals.png" width="50px" height="30px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/courses" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Courses</NavLink>
          </Nav>
          <div className="d-flex align-items-center gap-2">
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <Image
                  src="https://picsum.photos/200"
                  width="30px"
                  height="30px"
                  alt="user image"
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-danger" as={Link} to="/authentication/login">Login</Button>
            <Button variant="danger" as={Link} to="/authentication/signup">Sign-up</Button>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

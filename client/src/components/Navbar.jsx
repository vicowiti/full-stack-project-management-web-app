import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            VProject
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

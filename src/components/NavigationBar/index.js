import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Logo, LoginButton } from "./NavBar.style";
import logoImage from "../../resources/logo_IUSTE.png";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Logo
            src={logoImage}
            alt="Logo iuste"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Acceuil</Nav.Link>

            <NavDropdown title="Inscription" id="basic-nav-dropdown">
              <NavDropdown.Item href="/inscriptions/new">
                Nouvelle Inscription
              </NavDropdown.Item>
              <NavDropdown.Item href="/inscriptions/update">
                Mise A Jour
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Effets Académiques" id="">
              <NavDropdown.Item href="/effects/file">
                Fiche D'Inscription
              </NavDropdown.Item>
              <NavDropdown.Item href="/effects/quitus">
                Quitus De Paiement
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <LoginButton className="login-button">Connexion</LoginButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

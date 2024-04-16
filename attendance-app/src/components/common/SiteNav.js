import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function SiteNav(props) {
    const handleLogOut = () => {
        props.logOut();
    }

    return (
    <header>
        <Navbar variant="dark" bg = "dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Attendance App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="/events">Your events</NavDropdown.Item>
              <NavDropdown.Item href="/attendance">
                Confirm Attendance
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/create-event">
                Create Event
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    );
}

export default SiteNav;
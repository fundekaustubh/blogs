import { Navbar, Nav, Container } from "react-bootstrap";
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                    <Nav.Link href="/blogs/new">Add Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
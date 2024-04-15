import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";


function RegisterPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Register</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlID="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" palceholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlID="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlID="formConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Login &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;
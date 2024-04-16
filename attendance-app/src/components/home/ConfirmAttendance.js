import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

function ConfirmAttendance() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Button href="/thankyou">Confirm</Button>
                    <Button href="/decline">Decline</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default ConfirmAttendance;
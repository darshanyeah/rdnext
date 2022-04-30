import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function riddhi() {
  return (
    <Container>
      <div className="mt-3">
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <textarea
            className="form-control h-50"
            title="message"
            name="message"
            placeholder="message"
          />
        </Form.Group>
      </div>
      <Button className="mt-3" variant="secondary">
        Send
      </Button>
    </Container>
  );
}

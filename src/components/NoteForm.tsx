import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

export const NoteForm = () => {
  return (
    <Form>
      <Stack gap={3}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={10} required />
        </Form.Group>
        <Stack gap={2} direction="horizontal" className="justify-content-end ">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

import { useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../types";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current?.value || "",
      markdown: markdownRef.current?.value || "",
      tags: [],
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={3}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                required
                ref={titleRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      id: tag.value,
                      label: tag.label,
                    }))
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={10} required ref={markdownRef} />
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
}

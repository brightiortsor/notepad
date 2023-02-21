import { NoteData } from "../types";
import { NoteForm } from "./NoteForm";

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
}

export const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};

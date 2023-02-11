export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

// once the value of the Tag is changed, we don't want to
// go into every single Note to update the value, we just
// want to update the value of the Tag alone. Hence ...

export type RawNote = {
  id: string;
};

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

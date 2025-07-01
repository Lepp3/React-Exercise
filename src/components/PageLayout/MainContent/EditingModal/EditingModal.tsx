import { useState, useEffect } from 'react';
import { type CardData } from '../Card/types/Card.types';
import { StyledOverlay, StyledModal } from './EditingModal.styles';

interface EditCardModalProps {
  card: CardData;
  onSave: (updatedCard: CardData) => void;
  onClose: () => void;
}

function EditCardModal({ card, onSave, onClose }: EditCardModalProps) {
  const [form, setForm] = useState<CardData>(card);

  useEffect(() => {
    setForm(card);
  }, [card]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <StyledOverlay onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <h2>Edit Card</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <input
            name="label"
            value={form.label}
            onChange={handleChange}
            placeholder="Label"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            name="actionButtonName"
            value={form.actionButtonName}
            onChange={handleChange}
            placeholder="Button Text"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </StyledModal>
    </StyledOverlay>
  );
}

export default EditCardModal;

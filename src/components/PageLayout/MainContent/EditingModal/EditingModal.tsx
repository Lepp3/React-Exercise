import { useState, useEffect } from 'react';
import { type CardData } from '../Card/types/Card.types';
import { StyledOverlay, StyledModal } from './EditingModal.styles';

interface EditCardModalProps {
  mode: 'edit' | 'create';
  card?: CardData;
  onSave: (updatedCard: CardData) => void;
  onClose: () => void;
}

function EditCardModal({ mode, card, onSave, onClose }: EditCardModalProps) {
  const isEdit = mode === 'edit';
  const [form, setForm] = useState<CardData>(
    card ?? {
      id: '224',
      title: '',
      image: '',
      description: '',
      label: '',
      actionButtonName: '',
      layout: 'column',
    }
  );

  useEffect(() => {
    if (card && isEdit) {
      setForm(card);
    }
  }, [card, isEdit]);

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
        <h2>{isEdit ? 'Edit Card' : 'Create Card'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
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
          <button type="submit">
            {isEdit ? 'Save Changes' : 'Create Card'}
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </StyledModal>
    </StyledOverlay>
  );
}

export default EditCardModal;

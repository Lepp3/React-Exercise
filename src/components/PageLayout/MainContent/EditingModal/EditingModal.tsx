import { useState, useMemo } from 'react';
import { type CardProps } from '../Card/types/Card.types';
import { StyledOverlay, StyledModal } from './EditingModal.styles';
import { v4 as uuidv4 } from 'uuid';
import type { SectionKey } from '../../../../contexts/CardContext/CardProvider';

interface EditCardModalProps {
  mode: 'edit' | 'create';
  card?: CardProps;
  sectionKey: SectionKey;
  onSave: (updatedCard: CardProps, sectionKey: SectionKey) => void;
  onClose: () => void;
}

function EditCardModal({
  mode,
  card,
  sectionKey,
  onSave,
  onClose,
}: EditCardModalProps) {
  const isEdit = mode === 'edit';
  const [form, setForm] = useState<CardProps>(
    card ?? {
      id: uuidv4(),
      title: '',
      image: '',
      description: '',
      label: '',
      actionButtonName: '',
      layout: 'column',
    }
  );

  const isFormValid = useMemo(() => {
    return (
      form.title?.trim() !== '' ||
      form.image?.trim() !== '' ||
      form.description?.trim() !== '' ||
      form.label?.trim() !== '' ||
      form.actionButtonName?.trim() !== ''
    );
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form, sectionKey);
  };

  if (mode === 'edit' && !card) return null;

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
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              opacity: isFormValid ? 1 : 0.6,
              cursor: isFormValid ? 'pointer' : 'not-allowed',
            }}
          >
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

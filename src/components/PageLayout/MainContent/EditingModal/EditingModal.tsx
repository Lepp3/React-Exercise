import { useState, useMemo } from 'react';
import { type CardProps } from '../Card/types/Card.types';
import {
  StyledOverlay,
  StyledModal,
  FormGroup,
  StyledInput,
  StyledTextArea,
} from './EditingModal.styles';
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
          <FormGroup>
            <label htmlFor="title">Card Title: </label>
            <StyledInput
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="image">Card Image: </label>
            <StyledInput
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="label">Card Label: </label>
            <StyledInput
              id="label"
              name="label"
              value={form.label}
              onChange={handleChange}
              placeholder="Label"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">Card Description: </label>
            <StyledTextArea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="actionButtonName">Name of action: </label>
            <StyledInput
              id="actionButtonName"
              name="actionButtonName"
              value={form.actionButtonName}
              onChange={handleChange}
              placeholder="Button Text"
            />
          </FormGroup>
          <FormGroup>
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
          </FormGroup>
        </form>
      </StyledModal>
    </StyledOverlay>
  );
}

export default EditCardModal;

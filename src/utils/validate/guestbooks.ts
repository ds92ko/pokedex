import { GUESTBOOK_ERRORS } from '@/constants/guestbooks';
import { GuestbookFormData, GuestbooksValidation } from '@/type/guestbooks';

export const guestbooksValidation: GuestbooksValidation = {
  name: value => typeof value === 'string' && value.trim() !== '',
  satisfaction: value => typeof value === 'number' && value >= 1 && value <= 5,
  content: value => typeof value === 'string' && value.trim() !== '',
  password: value => typeof value === 'string' && value.length >= 4 && value.length <= 20
};

export const validateGuestbookForm = (data: GuestbookFormData) => {
  const errors: Record<keyof GuestbookFormData, string> = {
    name: guestbooksValidation.name(data.name) ? '' : GUESTBOOK_ERRORS.name,
    satisfaction: guestbooksValidation.satisfaction(data.satisfaction)
      ? ''
      : GUESTBOOK_ERRORS.satisfaction,
    content: guestbooksValidation.content(data.content) ? '' : GUESTBOOK_ERRORS.content,
    password: guestbooksValidation.password(data.password) ? '' : GUESTBOOK_ERRORS.password
  };

  const isAllValid = Object.values(errors).every(msg => msg === '');

  return isAllValid ? null : errors;
};

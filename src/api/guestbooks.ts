import { CreateGuestbook } from '@/type/guestbooks';

export const createGuestbook: CreateGuestbook = async data => {
  try {
    const res = await fetch('/api/guestbooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error(`Failed to create guestbook: ${res.status} ${res.statusText}`);

    return res;
  } catch (error) {
    throw error;
  }
};

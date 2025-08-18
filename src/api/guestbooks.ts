import { HttpError } from '@/lib/errors/http-errors';
import { CreateGuestbook, FetchGuestbookList, UpdateGuestbook } from '@/type/guestbooks';

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

    const json = await res.json();

    if (!json.success) throw new Error(`Failed to create guestbook: ${json.errors}`);

    return json.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGuestbookList: FetchGuestbookList = async ({ pageParam = 0 }) => {
  try {
    const res = await fetch(`/api/guestbooks?page=${pageParam}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) throw new Error(`Failed to fetch guestbooks: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const deleteGuestbook = async ({ id, password }: { id: string; password: string }) => {
  try {
    const res = await fetch(`/api/guestbooks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });

    if (!res.ok) {
      const json = await res.json();
      const message = json.message || res.statusText;
      throw new HttpError(res.status, message);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const updateGuestbook: UpdateGuestbook = async data => {
  try {
    const res = await fetch(`/api/guestbooks/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      const message = json.message || res.statusText;
      throw new HttpError(res.status, message);
    }

    if (!json?.success) {
      throw new HttpError(res.status, json?.errors ?? 'Failed to update guestbook');
    }

    return json.data;
  } catch (error) {
    throw error;
  }
};

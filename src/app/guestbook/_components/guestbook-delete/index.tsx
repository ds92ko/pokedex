'use client';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';

import { deleteGuestbook } from '@/api/guestbooks';
import {
  guestbookDelete,
  guestbookDeleteFieldset,
  guestbookDeletePending
} from '@/app/guestbook/_components/guestbook-delete/index.css';
import Field from '@/components/common/field';
import Input from '@/components/common/input';
import Pokeball from '@/components/common/pokeball';
import { GUESTBOOK_ERRORS, GUESTBOOK_LIST_QUERY_KEY } from '@/constants/guestbooks';
import { HttpError } from '@/lib/errors/http-errors';
import { useDialogActions } from '@/stores/dialog';
import { GuestbookListResponse } from '@/type/guestbooks';
import { guestbooksValidation } from '@/utils/validate/guestbooks';

export default function GuestbookDelete({ dialogId, id }: { dialogId: string; id: string }) {
  const { setDisabled, openAlert } = useDialogActions();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteGuestbook,
    onSuccess: (_data, variables) => {
      queryClient.setQueryData<InfiniteData<GuestbookListResponse>>(
        GUESTBOOK_LIST_QUERY_KEY,
        oldData => {
          if (!oldData) return oldData;

          const updatedPages = oldData.pages.map(page => ({
            ...page,
            data: page.data.filter(item => item.id !== variables.id),
            total: page.total - (page.data.some(item => item.id === variables.id) ? 1 : 0)
          }));

          return { ...oldData, pages: updatedPages };
        }
      );

      openAlert({
        title: '방명록 삭제 완료',
        content: '방명록이 성공적으로 삭제되었습니다.'
      });
    },
    onError: error => {
      const message = error instanceof HttpError ? error.message : '방명록 삭제에 실패하였습니다.';

      openAlert({
        title: '방명록 삭제 실패',
        content: `${message} 다시 시도해주세요.`
      });
    },
    onSettled: () => setDisabled(false)
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);

    const newError = guestbooksValidation.password(value) ? '' : GUESTBOOK_ERRORS.password;

    setError(newError);
    setDisabled(!!newError);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newError = guestbooksValidation.password(password) ? '' : GUESTBOOK_ERRORS.password;

    if (newError) {
      setError(newError);
      return;
    }

    mutate({ id, password });
    setDisabled(true);
  };

  return (
    <form
      id={dialogId}
      className={guestbookDelete}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      {isPending && (
        <div className={guestbookDeletePending}>
          <Pokeball size={50} />
          <span>트레이너의 모험을 삭제 중입니다...</span>
        </div>
      )}
      <fieldset className={`${guestbookDeleteFieldset} ${isPending ? 'pending' : ''}`}>
        <Field
          id={`delete-guestbook-password`}
          label="비밀번호"
          error={error}
        >
          <Input
            type="password"
            id={`delete-guestbook-password`}
            name={`delete-guestbook-password`}
            value={password}
            onChange={handleChange}
            placeholder="방명록 등록 시 설정한 비밀번호를 입력해주세요."
            minLength={4}
            maxLength={20}
            disabled={isPending}
            required
            autoComplete="off"
          />
        </Field>
      </fieldset>
    </form>
  );
}

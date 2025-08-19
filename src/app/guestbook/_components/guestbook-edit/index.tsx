'use client';

import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';

import { updateGuestbook } from '@/api/guestbooks';
import {
  GUESTBOOK_ERROR_DEFAULTS,
  PREFIX,
  SATISFACTION_DEFAULT_MESSAGE
} from '@/app/guestbook/_components/guestbook-edit/constants';
import {
  guestbookEditFieldset,
  guestbookEdit,
  guestbookEditPending
} from '@/app/guestbook/_components/guestbook-edit/index.css';
import { GuestbookEditProps } from '@/app/guestbook/_components/guestbook-edit/types';
import Field from '@/components/common/field';
import Input from '@/components/common/input';
import Pokeball from '@/components/common/pokeball';
import Rating from '@/components/common/rating';
import Textarea from '@/components/common/textarea';
import { GUESTBOOK_ERRORS, GUESTBOOK_LIST_QUERY_KEY } from '@/constants/guestbooks';
import { HttpError } from '@/lib/errors/http-errors';
import { useDialogActions } from '@/stores/dialog';
import { GuestbookFormData, GuestbookFormErrors, GuestbookListResponse } from '@/type/guestbooks';
import { guestbooksValidation, validateGuestbookForm } from '@/utils/validate/guestbooks';

export default function GuestbookEdit({ dialogId, data }: GuestbookEditProps) {
  const { setDisabled, openAlert } = useDialogActions();
  const [formData, setFormData] = useState<GuestbookFormData>({
    name: data.name,
    satisfaction: data.satisfaction,
    content: data.content,
    password: ''
  });
  const [errors, setErrors] = useState<GuestbookFormErrors>(GUESTBOOK_ERROR_DEFAULTS);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: updateGuestbook,
    onSuccess: data => {
      queryClient.setQueryData<InfiniteData<GuestbookListResponse>>(
        GUESTBOOK_LIST_QUERY_KEY,
        oldData => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page, pageIndex) => {
              if (pageIndex === 0) {
                const filtered = page.data.filter(item => item.id !== data.id);
                return {
                  ...page,
                  data: [data, ...filtered]
                };
              }

              return {
                ...page,
                data: page.data.filter(item => item.id !== data.id)
              };
            })
          };
        }
      );

      openAlert({
        title: '방명록 수정 완료',
        content: '방명록이 성공적으로 수정되었습니다.'
      });
    },
    onError: error => {
      const message = error instanceof HttpError ? error.message : '방명록 수정에 실패하였습니다.';

      openAlert({
        title: '방명록 수정 실패',
        content: `${message} 다시 시도해주세요.`
      });
    },
    onSettled: () => setDisabled(false)
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const key = name.replace(PREFIX, '') as keyof GuestbookFormData;
    const isSatisfaction = key === 'satisfaction';

    setFormData({ ...formData, [key]: isSatisfaction ? Number(value) : value });

    const isValid = isSatisfaction
      ? guestbooksValidation[key](Number(value))
      : guestbooksValidation[key](value);
    const error = isValid ? '' : GUESTBOOK_ERRORS[key];

    setErrors({ ...errors, [key]: error });
    setDisabled(
      !!validateGuestbookForm({ ...formData, [key]: isSatisfaction ? Number(value) : value })
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateGuestbookForm(formData);

    if (errors) {
      setErrors(prev => ({
        ...prev,
        ...errors
      }));

      return;
    }

    mutate({ id: data.id, ...formData });
    setDisabled(true);
  };

  return (
    <form
      id={dialogId}
      className={guestbookEdit}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      {isPending && (
        <div className={guestbookEditPending}>
          <Pokeball size={50} />
          <span>트레이너의 모험을 수정 중입니다...</span>
        </div>
      )}
      <fieldset className={`${guestbookEditFieldset} ${isPending ? 'pending' : ''}`}>
        <Field
          id={`${PREFIX}name`}
          label="트레이너 이름"
          error={errors.name}
        >
          <Input
            type="text"
            id={`${PREFIX}name`}
            name={`${PREFIX}name`}
            value={formData.name}
            onChange={handleChange}
            placeholder="트레이너분의 이름을 입력해주세요."
            disabled={isPending}
            required
            autoComplete="off"
          />
        </Field>
        <Field
          id={`${PREFIX}satisfaction`}
          label="모험 만족도"
          error={errors.satisfaction}
          message={SATISFACTION_DEFAULT_MESSAGE}
        >
          <Rating
            id={`${PREFIX}satisfaction`}
            name={`${PREFIX}satisfaction`}
            checked={formData.satisfaction}
            onChange={handleChange}
            disabled={isPending}
          />
        </Field>
        <Field
          id={`${PREFIX}content`}
          label="모험 내용"
          error={errors.content}
          count={{
            value: formData.content.length,
            max: 500
          }}
        >
          <Textarea
            id={`${PREFIX}content`}
            name={`${PREFIX}content`}
            value={formData.content}
            onChange={handleChange}
            rows={3}
            placeholder="모험 중 느낀 점이나 방문 소감을 자유롭게 적어주세요."
            maxLength={500}
            disabled={isPending}
            required
            autoComplete="off"
          />
        </Field>
        <Field
          id={`${PREFIX}password`}
          label="비밀번호"
          error={errors.password}
        >
          <Input
            type="password"
            id={`${PREFIX}password`}
            name={`${PREFIX}password`}
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요."
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

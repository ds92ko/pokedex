'use client';

import { FormEvent, useState } from 'react';

import { FormContentProps } from '@/stores/dialog/types';

export default function GuestbookForm({ dialogId }: FormContentProps) {
  const [formData, setFormData] = useState({
    name: '',
    satisfaction: 1,
    content: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      id={dialogId}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">트레이너 이름</label>
        <small>트레이너분의 이름을 입력해주세요.</small>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          placeholder="트레이너분의 이름을 입력해주세요."
          required
        />
      </div>
      <div>
        <label htmlFor="satisfaction">모험 만족도</label>
        <small>이번 모험에 대한 만족도를 별점으로 평가해주세요.</small>
        <input
          type="range"
          id="satisfaction"
          min="1"
          max="5"
          step="1"
          value={formData.satisfaction}
          onChange={e => setFormData({ ...formData, satisfaction: Number(e.target.value) })}
          aria-label="모험 만족도"
          required
        />
      </div>
      <div>
        <label htmlFor="content">모험 내용</label>
        <small>모험 중 느낀 점이나 방문 소감을 자유롭게 적어주세요.</small>
        <textarea
          id="content"
          value={formData.content}
          onChange={e => setFormData({ ...formData, content: e.target.value })}
          rows={4}
          placeholder="모험 중 느낀 점이나 방문 소감을 자유롭게 적어주세요."
          maxLength={500}
          required
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <small>작성한 내용을 수정하거나 삭제할 수 있는 비밀번호를 입력해주세요.</small>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          placeholder="작성한 내용을 수정하거나 삭제할 수 있는 비밀번호를 입력해주세요."
          minLength={4}
          maxLength={20}
          required
        />
      </div>
    </form>
  );
}

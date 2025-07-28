import { GetPostposition, Postposition } from '@/utils/postposition/types';

export const getPostposition: GetPostposition = (marker, hasFinalConsonant) => {
  if (marker === '을' || marker === '를') return hasFinalConsonant ? '을' : '를';
  if (marker === '이' || marker === '가') return hasFinalConsonant ? '이' : '가';
  if (marker === '은' || marker === '는') return hasFinalConsonant ? '은' : '는';
  if (marker === '과' || marker === '와') return hasFinalConsonant ? '과' : '와';
  return marker;
};

export const postposition: Postposition = (text, marker) => {
  const code = text.charCodeAt(text.length - 1) - 44032;

  if (text.length === 0) return '';
  if (code < 0 || code > 11171) return text;
  return `${text}${getPostposition(marker, code % 28 !== 0)}`;
};

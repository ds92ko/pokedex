import { createGlobalTheme } from '@vanilla-extract/css';

export const fontFamily = {
  logo: 'var(--font-cherry-bomb-one)',
  text: 'var(--font-dongle)'
};

export const icons = {
  size: {
    sm: '16px',
    md: '20px',
    lg: '24px'
  }
};

const layout = {
  header: {
    height: '68px'
  }
};

const fonts = {
  size: {
    xxs: '20px',
    xs: '22px',
    sm: '24px',
    md: '26px',
    lg: '28px',
    xl: '32px',
    xxl: '36px'
  },
  weight: {
    normal: '300',
    medium: '400',
    bold: '700'
  }
};

const spacing = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '40px'
};

const colors = {
  primary: '#D94C4C', // 포인트 컬러
  secondary: '#F3C93B', // 보조 포인트 컬러
  background: '#FAFAFA', // 배경 컬러
  text: '#333333', // 텍스트 컬러
  accent: '#4A5FC1', // 버튼/링크
  border: '#E0E0E0', // 보더 컬러
  white: '#FFFFFF', // 흰색

  // 타입별 색상
  type: {
    normal: '#A8A77A', // 노멀 타입
    fire: '#EE8130', // 불 타입
    water: '#6390F0', // 물 타입
    electric: '#F7D02C', // 전기 타입
    grass: '#7AC74C', // 풀 타입
    ice: '#96D9D6', // 얼음 타입
    fighting: '#C22E28', // 격투 타입
    poison: '#A33EA1', // 독 타입
    ground: '#E2BF65', // 땅 타입
    flying: '#A98FF3', // 비행 타입
    psychic: '#F95587', // 에스퍼 타입
    bug: '#A6B91A', // 벌레 타입
    rock: '#B6A136', // 바위 타입
    ghost: '#735797', // 고스트 타입
    dragon: '#6F35FC', // 드래곤 타입
    dark: '#705746', // 악 타입
    steel: '#B7B7CE', // 강철 타입
    fairy: '#D685AD' // 페어리 타입
  }
};

export const vars = createGlobalTheme(':root', {
  layout,
  fonts,
  spacing,
  colors
});

import { createGlobalTheme } from '@vanilla-extract/css';

export const fontFamily = {
  logo: 'var(--font-cherry-bomb-one)',
  text: 'var(--font-dongle)'
};

export const icons = {
  size: {
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '32px'
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
  caption: '#777777', // 캡션 컬러
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
  },

  // 카테고리별 색상
  category: {
    legendary: {
      // 전설의 포켓몬
      background: '#FBC02D',
      text: '#8B5A00'
    },
    mythical: {
      // 환상의 포켓몬
      background: '#8CC8FF',
      text: '#7B1FA2'
    }
  }
};

const alpha = {
  primary: 'rgba(217, 76, 76, 0.3)', // 포인트 컬러
  secondary: 'rgba(243, 201, 59, 0.3)', // 보조 포인트 컬러
  background: 'rgba(250, 250, 250, 0.5)', // 배경 컬러
  text: 'rgba(51, 51, 51, 0.5)', // 텍스트 컬러
  caption: 'rgba(119, 119, 119, 0.5)', // 캡션 컬러
  accent: 'rgba(74, 95, 193, 0.7)', // 버튼/링크
  border: 'rgba(224, 224, 224, 0.5)', // 보더 컬러
  shadow: 'rgba(0, 0, 0, 0.1)', // 그림자 색상
  type: {
    normal: 'rgba(168, 167, 122, 0.3)', // 노멀
    fire: 'rgba(238, 129, 48, 0.3)', // 불
    water: 'rgba(99, 144, 240, 0.3)', // 물
    electric: 'rgba(247, 208, 44, 0.3)', // 전기
    grass: 'rgba(122, 199, 76, 0.3)', // 풀
    ice: 'rgba(150, 217, 214, 0.3)', // 얼음
    fighting: 'rgba(194, 46, 40, 0.3)', // 격투
    poison: 'rgba(163, 62, 161, 0.3)', // 독
    ground: 'rgba(226, 191, 101, 0.3)', // 땅
    flying: 'rgba(169, 143, 243, 0.3)', // 비행
    psychic: 'rgba(249, 85, 135, 0.3)', // 에스퍼
    bug: 'rgba(166, 185, 26, 0.3)', // 벌레
    rock: 'rgba(182, 161, 54, 0.3)', // 바위
    ghost: 'rgba(115, 87, 151, 0.3)', // 고스트
    dragon: 'rgba(111, 53, 252, 0.3)', // 드래곤
    dark: 'rgba(112, 87, 70, 0.3)', // 악
    steel: 'rgba(183, 183, 206, 0.3)', // 강철
    fairy: 'rgba(214, 133, 173, 0.3)' // 페어리
  }
};

const gradient = {
  skeleton: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
  category: {
    legendary: `linear-gradient(135deg,
        #FBC02D 0%,
        #F8E1B0 35%,
        #FFFFFF 50%,
        #F8E1B0 65%,
        #FBC02D 100%
      );`,
    mythical: `linear-gradient(135deg,
        #8CC8FF 0%,
        #F8BBD0 35%,
        #FFFFFF 50%,
        #F8BBD0 65%,
        #8CC8FF 100%
      );`
  }
};

export const vars = createGlobalTheme(':root', {
  layout,
  fonts,
  spacing,
  colors,
  alpha,
  gradient
});

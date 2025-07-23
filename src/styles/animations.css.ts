import { keyframes } from '@vanilla-extract/css';

export const slide = {
  in: {
    top: keyframes({
      '0%': {
        transform: 'translateY(-100%)'
      },
      '100%': {
        transform: 'translateY(0)'
      }
    }),
    right: keyframes({
      '0%': {
        transform: 'translateX(-100%)'
      },
      '100%': {
        transform: 'translateX(0)'
      }
    }),
    bottom: keyframes({
      '0%': {
        transform: 'translateY(100%)'
      },
      '100%': {
        transform: 'translateY(0)'
      }
    }),
    left: keyframes({
      '0%': {
        transform: 'translateX(100%)'
      },
      '100%': {
        transform: 'translateX(0)'
      }
    })
  },
  out: {
    top: keyframes({
      '0%': {
        transform: 'translateY(0)'
      },
      '100%': {
        transform: 'translateY(-100%)'
      }
    }),
    right: keyframes({
      '0%': {
        transform: 'translateX(0)'
      },
      '100%': {
        transform: 'translateX(100%)'
      }
    }),
    bottom: keyframes({
      '0%': {
        transform: 'translateY(0)'
      },
      '100%': {
        transform: 'translateY(100%)'
      }
    }),
    left: keyframes({
      '0%': {
        transform: 'translateX(0)'
      },
      '100%': {
        transform: 'translateX(-100%)'
      }
    })
  }
};

export const fade = {
  in: keyframes({
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }),
  out: keyframes({
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  })
};

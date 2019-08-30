export default {
  colors: {
    primary: '#000',
    grey: '#979797'
  },
  textSizes: {
    regular: '14px',
    big: '18px'
  }
};

export type Style = {
  theme?: {
    textSizes?: {
      big?: string,
      regular?: string
    },
    colors?: {
      primary?: string,
      grey?: string
    }
  },
};

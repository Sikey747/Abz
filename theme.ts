import {
  experimental_extendTheme as extendTheme,
  createTheme,
  alpha,
  getContrastRatio,
} from '@mui/material/styles';

import { defVar } from './var';

import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}
declare module '@mui/material/styles' {
  interface Palette {
    ochre: PaletteOptions['primary'];
    gradient: Record<number, string>;
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary'];
    gradient: Record<number, string>;
  }
  interface TypographyVariants {
    p1: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    body2: false;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    MuiTypography: {
      defaultProps: {
        fontFamily?: string | string[];
        // Другие свойства по умолчанию, если необходимо
      };
    };
  }
}

const theme = extendTheme({
  breakpoints: {
    // keys: {
    //   0: 'xs',
    //   1: 'sm',
    //   2: 'md',
    //   3: 'lg',
    //   4: 'xl',
    //   5: 'xxl',
    // },
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 967,
      xl: 1280,
      xxl: 1920,
    },
  },
  typography: {
    fontFamily: `'Nunito', 'sans-serif'`,
    fontSize: 16,
    htmlFontSize: 16,
    p1: {
      fontSize: 18,
      fontFamily: `'Hedvig Letters Serif', 'serif'`,
    },
    body2: undefined,
  },
  components: {
    MuiTypography: { defaultProps: { fontFamily: 'Nunito' } },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#f8f8f8',
        },
        primary: {
          main: '#f4e041',
          light: '#FFE302',
        },
        secondary: {
          main: '#00BDD3',
        },
        text: {
          primary: 'rgba(0,0,0,0.87)',
        },
        info: {
          main: '#4285F4',
        },
        error: {
          main: '#CB3D40',
        },
        ochre: {
          main: defVar.ochre.main,
          light: alpha(defVar.ochre.main, 0.5),
          dark: alpha(defVar.ochre.main, 0.9),
          contrastText:
            getContrastRatio(defVar.ochre.main, '#fff') > 4.5 ? '#fff' : '#111',
        },
        gradient: {
          1: 'red',
          2: 'gren',
          3: 'blue',
          4: 'black',
          5: 'purple',
        },
        grey: {
          A100: '#d0cfcf',
          A200: '#7E7E7E',
        },
        divider: '#D9D9D9',
        action: {
          disabled: 'rgba(255, 255, 255, 0.87)',
          disabledBackground: '#B4B4B4',
        },
      },
    },
  },
});

export default theme;

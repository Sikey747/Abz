import {
  StyledEngineProvider,
  ThemeProvider as ThemeProviderMUI,
  CssBaseline,
} from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import theme from '../theme';

interface ThemeProviderMUIProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderMUIProps) {
  return (
    <ThemeProviderMUI theme={theme}>
      <CssVarsProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          {children}
        </StyledEngineProvider>
      </CssVarsProvider>
    </ThemeProviderMUI>
  );
}

export default ThemeProvider;

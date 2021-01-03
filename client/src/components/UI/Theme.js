import { useDarkMode } from '../../hooks/useDarkMode';
import { darkTheme, lightTheme } from '../../themes/themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../globalStyles';
import Toggle from './Toggler';

const Theme = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  if (!mountedComponent) return <div />;
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

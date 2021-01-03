import { Switch } from '@material-ui/core';
import { Centerus } from './Centerus';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Centerus>
      <span>Light</span>
      <Switch
        checked={theme !== 'light'}
        onChange={toggleTheme}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <span>Dark</span>
    </Centerus>
  );
};

export default Toggle;

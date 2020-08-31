import colors from 'styles/colors.scss';

import statusLocked from 'assets/status/locked.png';
import statusBroken from 'assets/status/broken.png';
import statusDefault from 'assets/status/default.png';
import statusDisconnected from 'assets/status/disconnected.png';
import {createMuiTheme} from '@material-ui/core';

export const statusMap = new Map([
  ['locked', {icon: statusLocked, message: 'Schloss ist geschlossen'}],
  [
    'broken',
    {
      icon: statusBroken,
      message: 'Schloss ist offen',
    },
  ],
  [
    'default',
    {
      icon: statusDefault,
    },
  ],
  [
    'disconnected',
    {
      icon: statusDisconnected,
      message: 'Schloss ist nicht verbunden',
    },
  ],
]);

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.brand,
    },
    secondary: {
      main: colors.inverse,
    },
  },
});

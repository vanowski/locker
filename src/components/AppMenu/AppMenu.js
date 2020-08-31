import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

import {className} from 'utils/semantics';

import 'components/AppMenu/AppMenu.scss';

const block = className('app-menu');

const AppMenu = ({onLogout}) => (
  <div className={block()}>
    <div className={block('items')}>
      <div className={block('item')}>
        <IconButton>
          <SettingsIcon fontSize="large" color="secondary" />
        </IconButton>{' '}
        Einstellungen
      </div>
      <div className={block('item')}>
        <IconButton onClick={onLogout}>
          <ExitToAppIcon fontSize="large" color="secondary" />
        </IconButton>{' '}
        Abmelden
      </div>
    </div>
  </div>
);

export default AppMenu;

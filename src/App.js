import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Drawer} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import BluetoothSearchingIcon from '@material-ui/icons/BluetoothSearching';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {className} from 'utils/semantics';
import {theme} from 'utils/settings';

import 'App.scss';
import MenuIcon from '@material-ui/icons/Menu';
import AppMenu from 'components/AppMenu/AppMenu';
import Login from 'components/Login/Login';

const block = className('app');

function App() {
  const [status, setStatus] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className={block()}>
        {!status && <Login onLogin={() => setStatus('default')} />}
        {status && (
          <div className={block('body')}>
            <Header>
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon fontSize="large" color="secondary" />
              </IconButton>
            </Header>
            <Content status={status}>
              {status === 'locked' && (
                <IconButton>
                  <LocationOnOutlinedIcon fontSize="large" color="primary" />
                </IconButton>
              )}
              {status === 'broken' && (
                <IconButton>
                  <LocalTaxiIcon fontSize="large" color="primary" />
                </IconButton>
              )}
              {status === 'disconnected' && (
                <IconButton>
                  <BluetoothSearchingIcon fontSize="large" color="primary" />
                </IconButton>
              )}
              {status === 'default' && (
                <IconButton onClick={() => setStatus('locked')}>
                  <LockOutlinedIcon fontSize="large" color="primary" />
                </IconButton>
              )}
            </Content>
            {status !== 'default' && <Footer status={status} />}
          </div>
        )}
      </div>
      <Drawer onClose={() => setMenuOpen(false)} open={menuOpen} anchor="right">
        <AppMenu
          onLogout={() => {
            setStatus(null);
            setMenuOpen(false);
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}

export default App;

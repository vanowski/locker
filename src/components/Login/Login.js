import React from 'react';
import MuiButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core';

import {className} from 'utils/semantics';

import 'components/Login/Login.scss';
import colors from 'styles/colors.scss';

import logo from 'assets/logoBright.png';

const Button = withStyles({
  root: {
    background: colors.brand,
    color: colors.inverse,
    textTransform: 'none',
    fontSize: '1rem',
  },
})(MuiButton);

const block = className('login');

const Login = ({onLogin}) => (
  <div className={block()}>
    <div className={block('intro')}>
      <img src={logo} alt="" />
    </div>
    <div className={block('form')}>
      <div className={block('field')}>
        <TextField
          variant="outlined"
          defaultValue="maxie.muster@gmail.com"
          fullWidth
        />
      </div>
      <div className={block('field')}>
        <TextField
          variant="outlined"
          type="password"
          defaultValue="maxie.muster@gmail.com"
          fullWidth
        />
      </div>
      <div className={block('field')}>
        <Button variant="outlined" onClick={onLogin} fullWidth>
          Anmelden
        </Button>
      </div>
      <div className={block('link')}>Neues Konto erstellen</div>
    </div>
  </div>
);

export default Login;

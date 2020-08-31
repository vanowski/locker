import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import {className} from 'utils/semantics';

import 'components/Header/Header.scss';
import logo from 'assets/logo.png';

const block = className('header');

const Header = ({children}) => {
  return (
    <header className={block()}>
      <div className={block('logo')}>
        <img src={logo} alt="" />
      </div>
      <div className={block('menu')}>{children}</div>
    </header>
  );
};

export default Header;

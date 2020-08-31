import React from 'react';

import {className} from 'utils/semantics';
import {statusMap} from 'utils/settings';

import 'components/Footer/Footer.scss';

const block = className('footer');

const Footer = ({status}) => {
  return (
    <footer className={block({...(status && {[status]: true})})}>
      <div className={block('message')}>{statusMap.get(status).message}</div>
    </footer>
  );
};

export default Footer;

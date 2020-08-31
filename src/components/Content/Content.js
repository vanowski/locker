import React from 'react';

import {className} from 'utils/semantics';
import {statusMap} from 'utils/settings';

import 'components/Content/Content.scss';

const block = className('content');

const Content = ({status, children}) => (
  <div className={block()}>
    <div className={block('status')}>
      <img
        src={statusMap.get(status).icon}
        alt={statusMap.get(status).message}
      />
    </div>
    <div className={block('actions')}>{children}</div>
  </div>
);

export default Content;

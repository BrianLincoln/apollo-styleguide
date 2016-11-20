import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';

import 'normalize.css';
import './../styles/app/_app.scss';
import './../styles/sprak/sprak-helpers.scss';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

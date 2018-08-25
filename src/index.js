import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '~layouts/app';
import dva from 'dva';
import registerServiceWorker from './registerServiceWorker';

const app = dva();

app.model(require('~pages/user/models/users').default);
app.model(require('~pages/dashboard/model').default);

app.router(({ history }) => App({ history }));

app.start('#root');

registerServiceWorker();

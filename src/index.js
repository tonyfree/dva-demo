import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '~layouts/app';
import dva from 'dva'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from '~pages/user/reducers'
// import rootSaga from '~pages/user/sagas'
import registerServiceWorker from './registerServiceWorker';

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(rootSaga)

// function render () {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root'));
// }

// render()
// store.subscribe(render)

const app = dva()

app.model(require('~pages/user/models/users').default)

app.router(({history}) => App({history}))

app.start('#root')

registerServiceWorker();

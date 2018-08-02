import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 追加
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'; // 追加
import './index.css';
import App from './App';
import createStore from './createStore';
import registerServiceWorker from './registerServiceWorker';

// historyのインスタンスを生成
const history = createBrowserHistory();
// Storeの生成
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    {/*
      Linkコンポーネントなどが動作するように
      react-router-domのRouterではなく
      react-router-reduxのConnectedRouterを使う
    */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

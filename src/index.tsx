import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from '@/store';
import App from './App';
import './assets/css/index.less';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    {/* 将路由的文件都放在provider里面，这样Suspense紧急调用的时候页面也会及时拿到store的罪行状态值 */}
    <Suspense fallback={<span>loading...</span>}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);

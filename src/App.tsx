import { FC, memo } from 'react';
import { useRoutes } from 'react-router-dom';

import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';

import route from './router';

const App: FC = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(route)}</div>
      <AppFooter />
    </div>
  );
});

export default App;

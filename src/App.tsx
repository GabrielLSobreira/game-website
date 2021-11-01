import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import GlobalStyles from './components/GlobalStyles';
import { GameInfo } from './components/GameInfo';

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/game/:id" component={GameInfo} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

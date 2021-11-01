import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

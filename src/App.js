import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import { About } from './components/About';
import { ClickMe } from './components/ClickMe';
import { News } from './components/News';
import { MenuNgang } from './components/MenuNgang';


function App() {
  return (
    <div className="App">
      <MenuNgang />
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/click-me" component={ClickMe} />
          <Route path="/news" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

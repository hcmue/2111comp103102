import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { ClickMe } from './components/ClickMe';
import { News } from './components/News';
import { MenuNgang } from './components/MenuNgang';
import { DanhSachThanhPho } from './components/ThanhPho';


function App() {
  return (
    <div className="App">
      <MenuNgang />
      <BrowserRouter>
        <Switch>
          <Route path="/thanh-pho" component={DanhSachThanhPho} />
          <Route path="/about" component={About} />
          <Route path="/click-me" component={ClickMe} />
          <Route path="/news" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

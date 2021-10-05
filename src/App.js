import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { ClickMe } from './components/ClickMe';
import { News } from './components/News';
import { MenuNgang } from './components/MenuNgang';
import { DanhSachThanhPho } from './components/ThanhPho';
import { Counter } from './components/Counter';
import { MyContextProvider } from './context/MyContext';


function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <BrowserRouter>
          <MenuNgang />
          <Switch>
            <Route path="/thanh-pho" component={DanhSachThanhPho} />
            <Route path="/about" component={About} />
            <Route path="/click-me" component={ClickMe} />
            <Route path="/news" component={News} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;

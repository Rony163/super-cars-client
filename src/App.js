import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Collections from './pages/Home/Collections/Collections';
import Home from './pages/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/collections">
            <Collections></Collections>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

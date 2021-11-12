import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import View from './components/View';
import Edit from './views/Edit';
import Home from './views/Home';
import New from './views/New';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div style={{width: "40vw"}}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pets/new">
              <New />
            </Route>
            <Route exact path="/pets/:id">
              <View />
            </Route>
            <Route path="/pets/:id/edit">
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Blogs from './Blogs';
import Home from './Home';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="App bg-dark">
        <Navigation></Navigation>
        <Header></Header>
        <div className="App-body">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/blogs/new">

            </Route>
          </Switch>
        </div>
      </div >
    </Router >
  );
}

export default App;

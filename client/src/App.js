import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add" component={Create} />
        <Route path="/product/:id" component={Edit} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

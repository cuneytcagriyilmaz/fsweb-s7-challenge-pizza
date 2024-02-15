import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Order from "./components/Order";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  );
}

export default App;

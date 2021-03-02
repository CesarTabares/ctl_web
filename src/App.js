import "./App.css";
import { Router, Switch, Route } from "./base_components.js";
import WebHome from "./WebHome.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <WebHome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

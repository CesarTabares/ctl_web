import "./App.css";
import { Router, Switch, Route } from "./base_components.js";
import WebHome from "./WebHome.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import About from "./About.js";
import Products from "./Products.js";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <WebHome />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

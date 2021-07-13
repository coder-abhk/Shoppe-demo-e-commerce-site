import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

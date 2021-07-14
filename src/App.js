import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Form from "./components/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/user" exact component={Form} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

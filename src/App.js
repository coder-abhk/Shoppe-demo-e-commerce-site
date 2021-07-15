import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Form from "./components/Form";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/user" component={Form} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

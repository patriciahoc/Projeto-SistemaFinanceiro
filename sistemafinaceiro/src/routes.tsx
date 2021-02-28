import { Route, Switch } from "react-router-dom";

import Home from "./componentes/Home";
import Login from "./componentes/pages/Login";
import Moedas from "./componentes/pages/Moedas";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/acessar" exact component={Login} />
    <Route path="/coins" exact component={Moedas} />
  </Switch>
);

export default Routes;

import { Route, Switch } from "react-router-dom";

import Home from "./componentes/pages/Home";
import Login from "./componentes/pages/Login";
import Moedas from "./componentes/pages/Moedas";
import Financas from "./componentes/pages/Financeiro";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/acessar" exact component={Login} />
    <Route path="/coins" exact component={Moedas} />
    <Route path="/accountant" exact component={Financas} />
  </Switch>
);

export default Routes;

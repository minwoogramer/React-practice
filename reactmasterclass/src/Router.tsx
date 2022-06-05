import {BrowserRouter ,Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
return (
<BrowserRouter>
 <Switch>
  <Route path="/"></Route> 
  <Route path="/:coinId"></Route> 
 </Switch>
</BrowserRouter>

)
}

export default Router;
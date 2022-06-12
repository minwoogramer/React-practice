import { HashRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:coinId/" element={<Coin />}>
          <Route path={`price`} element={<Price />}></Route>
          <Route path={`chart`} element={<Chart />}></Route>
        </Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default Router;
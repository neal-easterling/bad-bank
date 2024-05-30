
import NavBar from "./components/navbar";
import {HashRouter, Routes, Route, Link} from "./components/context";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import Balance from "./components/balance";
import AllData from "./components/alldata";

function Spa(){

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create-account/" element = {<CreateAccount />} />
        <Route path="/login/" element = {<Login />} />
        <Route path="/deposit/" element = {<Deposit />} />
        <Route path="/withdraw/" element = {<Withdraw />} />
        <Route path="/balance/" element = {<Balance />} />
        <Route path="/alldata/" element = {<AllData />} />
      </Routes>
    </HashRouter>
  )

}

export default Spa;
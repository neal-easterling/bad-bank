
import NavBar from "./components/navbar";
import {HashRouter, Routes, Route, UserContext} from "./components/context";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";

function Spa(){

  return (
    <HashRouter>
        <NavBar />
        <div className="container-fluid">
          <UserContext.Provider value={{users:[{name: 'Neal', email: 'neal@abc.com', password: 'secret', balance: 100 }]}}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/create-account/" element = {<CreateAccount />} />
              <Route path="/deposit/" element = {<Deposit />} />
              <Route path="/withdraw/" element = {<Withdraw />} />
              <Route path="/alldata/" element = {<AllData />} />
            </Routes>
          </UserContext.Provider>
        </div>
    </HashRouter>
  )

}

export default Spa;
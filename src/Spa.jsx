
import NavBar from "./components/navbar";
import {HashRouter, Routes, Route, Link} from "./components/context";
import Home from "./components/home";

function Spa(){

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
      

    </HashRouter>
  )

}

export default Spa;
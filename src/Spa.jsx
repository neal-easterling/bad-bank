
import NavBar from "./components/navbar";
import HashRouter from "./components/context";

function Spa(){

  return (
    <HashRouter>
      <NavBar />
    </HashRouter>
  )

}

export default Spa;
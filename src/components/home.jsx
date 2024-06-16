
import { Card } from "./context";

function Home(){
  
  return(
    <Card
      txtcolor="black"
      title="Welcome to the bank"
      text="For all your banking needs"
      body={<img src="bank.png" className="img-fluid" alt="Responsive Image" />}
    />
  )

}

export default Home;
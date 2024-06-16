import ATM from "./ATM";
import { useContext } from "react";
import { UserContext, Card } from "./context";
import { useState } from "react";

function Deposit(){

  const ctx = useContext(UserContext);
  const {deposit, setDeposit } = useState(0);

  function handleDeposit(){
    //Add validation logic for deposit
    //See User Stories
    console.log(deposit);
  }

  return(
    <ATM
      title="Deposit"
      color="success"
      balance = {ctx.users[0].balance}
      value = {deposit}
      setValue = {setDeposit}
      handleValue = {handleDeposit}
    />
  
  )

}

export default Deposit;
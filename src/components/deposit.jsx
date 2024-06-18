import ATM from "./ATM";
import { useContext, useState } from "react";
import { UserContext, Card } from "./context";

function Deposit(){

  const ctx = useContext(UserContext);
  const [deposit, setDeposit ] = useState(0);
  const [status, setStatus] = useState('');
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  function validate(value){
    //if NaN
      //setStatus NaN
      //setShow false
      //return
    
    //if neg number
      //setStatus Deposit a negative amount
      //setShow false
      //return

    //setIsDisabled(false);
  }

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }

  function handleDeposit(){
    //Add validation logic for deposit
    //See User Stories
    //check for NaN & neg number
    console.log(deposit);
  }

  return(
    <ATM
      title="Deposit"
      color="success"
      status={status}
      show={show}
      balance = {ctx.users[0].balance}
      value = {deposit}
      setValue = {setDeposit}
      isDisabled = {isDisabled}
      clearForm = {clearForm}
      handleValue = {handleDeposit}
    />
  
  )

}

export default Deposit;
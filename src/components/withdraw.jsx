import ATM from "./ATM";
import { useContext } from "react";
import { UserContext, Card } from "./context";
import { useState } from "react";

function Withdraw(){
  const ctx = useContext(UserContext);
  const [withdrawl, setWithdrawl] = useState(0);
  const [status, setStatus] = useState('');
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  function validate(value){
    //if NaN
      //setStatus error NaN
      //setShow false

    //if overdraft
      //setStatus error insufficient funds
      //setShow false
    console.log('bs');
  }

  function clearForm(){
    setWithdrawl(0);
    setShow(true);
  }

  function handleChange(value){
    console.log(value);
  }

  function handleWithdrawl(){
    // ADD LOGIC FOR VALIDATION & WITHDRAWL FROM BALLANCE
    console.log(withdrawl);
  }

  return (
    <ATM
    title="Withdraw"
    color="warning"
    status={status}
    show={show}
    balance = {ctx.users[0].balance}
    value = {withdrawl}
    onChange = {handleChange}
    setValue = {setWithdrawl}
    isDisabled = {isDisabled}
    clearForm = {clearForm}
    handleValue = {handleWithdrawl}
  />
  )
  
}

export default Withdraw;
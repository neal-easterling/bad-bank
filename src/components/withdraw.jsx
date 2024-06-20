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
  const [balance, setBalance] = useState(ctx.users[0].balance);

  function validate(value){

    if(isNaN(value)){
      setStatus('Please enter numeric values only');
      setTimeout(()=> setStatus(''), 3000);
      console.log('not a number');
      return false;
    }

    if(value > balance){
      setStatus('transaction failed: insufficient funds');
      setTimeout(()=> setStatus(''), 3000);
      console.log('not a negative number');
      return false;
    }
    console.log('valid withdrawl');
    return true;
  }

  function testIsDisabled(){
    
    if(withdrawl!==0){
      setIsDisabled(false);
      return true;
    } 
    setIsDisabled(true);
    return false;
  }

  function clearForm(){
    setWithdrawl(0);
    setShow(true);
  }

  function handleChange(value){
    setWithdrawl(value);
    testIsDisabled();
  }

  function handleWithdrawl(){
    // ADD LOGIC FOR VALIDATION & WITHDRAWL FROM BALLANCE
    if(validate(withdrawl)){
      ctx.users[0].balance = ctx.users[0].balance - parseFloat(withdrawl);
      setBalance(balance-parseFloat(withdrawl));
      setShow(false);
    }
  }

  return (
    <ATM
    title="Withdraw"
    color="warning"
    status={status}
    show={show}
    balance = {ctx.users[0].balance}
    value = {withdrawl}
    handleChange = {handleChange}
    setValue = {setWithdrawl}
    isDisabled = {isDisabled}
    clearForm = {clearForm}
    handleValue = {handleWithdrawl}
  />
  )
  
}

export default Withdraw;
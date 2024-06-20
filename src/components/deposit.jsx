import ATM from "./ATM";
import { useContext, useState } from "react";
import { UserContext, Card } from "./context";

function Deposit(){

  const ctx = useContext(UserContext);
  const [deposit, setDeposit ] = useState(0);
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

    if(value<0){
      setStatus('Cannot deposit a negative amount');
      setTimeout(()=> setStatus(''), 3000);
      console.log('not a negative number');
      return false;
    }
    console.log('valid desposit');
    return true;
  }

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }

  function testIsDisabled(){
    
    if(deposit!==0){
      setIsDisabled(false);
      //console.log(deposit);
      return true;
    } 
    //console.log(deposit);
    setIsDisabled(true);
    return false;
  }

  function handleChange(value){
    //if(validate(value)){
      setDeposit(value);
      testIsDisabled();
    //} 
  }

  function handleDeposit(){
    //Add validation logic for deposit
    if(validate(deposit)){
      ctx.users[0].balance = ctx.users[0].balance + parseFloat(deposit);
      setBalance(balance+parseFloat(deposit));
      setShow(false);
    }
  }

  return(
    <ATM
      title="Deposit"
      color="success"
      status={status}
      show={show}
      balance = {balance}
      handleChange = {handleChange}
      value = {deposit}
      setValue = {setDeposit}
      isDisabled = {isDisabled}
      clearForm = {clearForm}
      handleValue = {handleDeposit}
    />
  
  )

}

export default Deposit;
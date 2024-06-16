import ATM from "./ATM";
import { useContext, useState } from "react";
import { UserContext } from "./context";

function Withdraw(){
  const ctx = useContext(UserContext);
  const{withdrawl, setWithdrawl} = useState(0);

  function handleWithdrawl(){
    // ADD LOGIC FOR VALIDATION & WITHDRAWL FROM BALLANCE
    console.log(withdrawl);
  }

  return(
    <ATM
      title="Withdraw"
      color="warning"
      balance = {ctx.users[0].balance}
      value = {withdrawl}
      setValue = {setWithdrawl}
      handleValue = {handleWithdrawl}
    />
  )
  
}

export default Withdraw;
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Card } from "./context";

function ATM(props){

  const style = {display: "flex", flexDirection:"column", gap:"1rem"};

  return (
    <>
    <h1>{props.title}</h1>
    <Card
      bgcolor = {props.color}
      status = {props.status}
      body={ props.show ? (
        <div className="container" 
          style={
            {
              display: "flex", 
              flexDirection:"column",
              gap: "2rem"
            }
          }>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <h3>Balance</h3>
            <h3>{props.balance}</h3>
          </div>
          <div style={style}>
            <h3>{props.title} Amount</h3>
            <input 
              type="input" 
              className="form-control" 
              id="deposit-amount" 
              placeholder="Enter Deposit Amount" 
              value={props.value}
              onChange={e=>props.handleChange(e.currentTarget.value)}
            />
            <button 
              type="submit" 
              className="btn btn-light"
              onClick={props.handleValue}
              disabled={props.isDisabled}
            >
              {props.title}
            </button>
          </div>
        </div>
      ) : (
        <div className="container" style={style}>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={props.clearForm}>{`Make another ${props.title}`}</button>
        </div>
      )}
    />
    </>
  )
}

export default ATM;
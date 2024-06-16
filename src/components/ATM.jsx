import { Card } from "./context";

function ATM(props){

  return (
    <>
    <h1>{props.title}</h1>
    <Card
      bgcolor = {props.color}
      body={
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
          <div style={{display: "flex", flexDirection:"column", gap:"1rem"}}>
            <h3>{props.title} Amount</h3>
            <input 
              type="input" 
              className="form-control" 
              id="deposit-amount" 
              placeholder="Enter Deposit Amount" 
              value={props.value}
              onChange={props.setValue}
            />
            <button 
              type="submit" 
              className="btn btn-light"
              onClick={props.handleValue}
            >
              {props.title}
            </button>
          </div>
        </div>
      }
    />
    </>
  )
}

export default ATM;
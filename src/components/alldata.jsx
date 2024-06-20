
import { useContext } from "react";
import { UserContext } from "./context";
import { Card } from "./context";

function AllData(){
  
  const ctx = useContext(UserContext);

  return(
    <Card
      txtcolor="black"
      body={
        <div className="container">
          <h1>All Data</h1>
          <table className="table">
            <thead>
              <tr id='head-row'>
                <th id='head-row-email' scope="col">Email</th>
                <th id='head-row-name' scope="col">Name</th>
                <th id='head-row-password' scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((value, index, array) => {
                return (
                  <tr id={index}>
                    <td id={index+'-1'} >{value.email}</td>
                    <td id={index+'-2'}>{value.name}</td>
                    <td id={index+'-3'}>{value.password}</td>
                  </tr>
                )
                
              })}
              
            </tbody>
          </table>
        </div>
      }
    /> 
  )

}

export default AllData;
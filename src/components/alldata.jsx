
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
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((value, index, array) => {
                return (
                  <tr id={index}>
                    <td>{value.email}</td>
                    <td>{value.name}</td>
                    <td>{value.password}</td>
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
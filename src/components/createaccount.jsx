
import { useContext } from "react";
import { UserContext } from "./context";
import { useState } from "react";
import { Card } from "./context";

function CreateAccount(){

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const ctx = useContext(UserContext);

  function handleChange(value, type){
    switch(type){
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
    testIsDisabled();
  }

  function testIsDisabled(){
    if(name!=='' && email !== '' && password!==''){
      setIsDisabled(false);
    }
  }

  function validate(field, label){
    if(!field){
      setStatus('Error: ' + label + ' is blank.');
      setTimeout(()=> setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name, email, password);
    if(!validate(name, 'name')) return;
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return;
    if(password.length < 8){
      setStatus('Password must be at least 8 characters long');
      setTimeout(()=> setStatus(''), 3000);
    }
    ctx.users.push({name, email, password, balance:100});
    setShow(false);
  }
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  const style = {display: "flex", flexDirection:"column", gap:"0.5rem"};
  

  
  return(
    <>
    <h1>Create Account</h1>
    <Card 
      bgcolor="primary"
      status={status}
      body={show ? (
        <div className="container" style={style}>
          <h3>Name</h3>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => handleChange(e.currentTarget.value, 'name')}/> 
          <h3>Email</h3>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => handleChange(e.currentTarget.value, 'email')}/> 
          <h3>Password</h3>
          <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => handleChange(e.currentTarget.value, 'password')}/> 
          
          {/* ADD LOGIC TO DISABLE BUTTON IF INPUTS EMPTY */}
          
          <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={isDisabled}>Submit</button>
        </div>
      ) : (
        <div className="container" style={style}>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </div>
      )}
    />
    </>
  )
  

}

export default CreateAccount;
import { useState,useEffect } from "react"
import './Login.css'
 

export default function LogIn(props) {

   const [enteredEmail, setEnteredEmail] = useState('')
   const [enteredPassword, setEnteredPassword ]= useState('')
   const [formIsVaild, setFormIsVaild] = useState(false)


// useEffect(()=>{
//   console.log('cheack')
//   setFormIsVaild(
//     enteredEmail.includes('@')  && enteredPassword.trim().length>6
//   );
// },[enteredEmail,enteredPassword]);


   const emailChangeHanler = (e) => {
    setEnteredEmail(e.target.value)
   setFormIsVaild(
      e.target.value.includes('@')  && enteredPassword.trim().length>6
    );
   }
   


   const passwordChangeHanler = (e) => {
     setEnteredPassword(e.target.value)
    setFormIsVaild(
      e.target.value.trim().length>6  && enteredEmail.includes('@')
    );
   }

  

   const submitHandler = (e) => {
    e.preventDefault()
    if(!formIsVaild){
      return
    }
    props.onLogin()
    setEnteredEmail('')
    setEnteredPassword('')
   }






  return (
    <div className="form-controls">
        <form onSubmit={submitHandler}>
    <div className="mb-3 mt-3" 
    // className={`${classes.control} ${emailIsVaild=== false ? classes.invalid :''}`}
    >
      <label for="email" className="form-label">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
      value={enteredEmail}
      onChange={emailChangeHanler}
 
      />
    </div>

    <div className="mb-3">
      <label for="pwd" className="form-label"  >Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"
        value={enteredPassword}
        onChange={passwordChangeHanler}
   
       />
    </div>

    <div className="form-check mb-3">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
      </label>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    
  </form>
  </div>
  )
}

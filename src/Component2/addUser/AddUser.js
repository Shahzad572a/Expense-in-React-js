
  

//  import ErrorModel from '../Error/errorModel';

// import React,{useState} from 'react'


// export default function AddUser(props) {
// const [message,setMessage] = useState("");
 
// const [form,setForm] = useState({
  
//   firstname:'',
//   lastname:'',
//   subject:""
// })


// const AddUserHandler =(e) => {
//     e.preventDefault()
   

//     if(!form.firstname || !form.lastname || !form.subject){
        
//         setMessage("All Fields are required")
//         return;
//     }
//     props.add(form)
//      setForm({
//       firstname:'',
//       lastname:'',
//       subject:""
//     });
     
   

//    setMessage("");

// }
 

//   return (
//      <div>
//     {/* <ErrorModel tittle="An Error occour" message="something went wrong"/> */}
//     <p className='text-danger'>{message}</p>
//     <form onSubmit={AddUserHandler}>
//     <div className="mb-3 mt-3">
//       <label for="firstname" className="form-label">Firstname:</label>
//       <input type="text" className="form-control" id="firstname"  name="firstname" value={form.firstname} onChange={(e)=>setForm({...form,firstname:e.target.value})}/>
//     </div>
//     <div className="mb-3">
//       <label for="lastname" className="form-label">Lastname :</label>
//       <input type="text" className="form-control" id="lastname"  name="lastname" value={form.lastname} onChange={(e)=>setForm({...form,lastname:e.target.value})}/>
//     </div>

//     <div className="mb-3">
//       <label for="subject" className="form-label">Subject :</label>
//       <input type="text" className="form-control" name="subject" id="subject"  value={form.subject} onChange={(e)=>setForm({...form,subject:e.target.value})}/>
//     </div>
//     <button type="button" className="btn btn-danger" onClick={props.onCancel}>Cancel</button>  
//     <button type="submit" className="btn btn-primary">Submit</button>
//   </form>
//   </div>
//   )
// }














// import { useState } from 'react'
// import UserList from './Component2/UserList/userList'
// import AddUser from './Component2/addUser/AddUser'
 

// // import NewUser from './Component2/Newuser/NewUser'
// const dummy = [
//  {
//    id:"e1",
//    firstname:"Musawir",
//    lastname:"Hussain",
//    subject:"React"
//  }
// ]

// export default function App() {
//  const [users,setUser] = useState(dummy)

//  const [show, setShow]=useState(false)


//  const adduser = (obj) =>{
//    debugger
//    obj.id = Math.random().toString()
//    setUser(prev  => {
//         return [obj, ...prev ]
//        })
//  }

//  const removeUser = (id) => {
//    const someUsers = users.filter(item => item.id !==id);
//    setUser(someUsers)
//  }

//  const showEditing =() => {
//    setShow(true)
//  }

//  const stopEditing =() =>{
//    setShow(false)
//  }

//   return (
//    <div className="container">
//   <h2 className='text-center'>User Managment</h2>
//   <br></br>
   
//   {!show && <button type="button" className="btn btn-primary btn-lg btn-block" onClick={showEditing}>Add user</button>}
//   {show && <AddUser add={adduser} onCancel={stopEditing}/>}
//   <UserList users={users} remove={removeUser}/>
//    </div>
//   )
//   }
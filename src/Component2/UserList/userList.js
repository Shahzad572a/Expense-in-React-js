import './list.css'
const  UserList = ({users,remove}) => {
  

  if(users.length===0){
    return <h2 className='goal-list__fallback'>There is no user!!!</h2>
  }
  
    return (
      
        <table className="table table-hover" id='list-contol'>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Subject</th>
            
          </tr>
        </thead>
        <tbody>
            {users.map((user,i) => {
            
          return ( 
          <tr 
          key={i}>
            
             <td>{user.firstname}</td>
             <td>{user.lastname}</td>
             <td>{user.subject}</td>
              
          </tr>)
            
             } )}
         
        
        </tbody>
      </table>
    
    )
  }
  export default UserList;

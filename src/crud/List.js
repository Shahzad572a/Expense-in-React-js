import { useEffect, useState } from "react";
import axios from 'axios';

const List = () => {
    const [users,setUsers] = useState([]);


    useEffect(() => {
       debugger
        axios.get("https://jsonplaceholder.typicode.com/posts").then((item) => {
        setUsers(item.data);
        })
   

    },[])

    return(

    <div className="container"> 
    <h2 className="text-center">Post List</h2>
        <div className="row">
                 {users.map( item => { 
                 return(
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                   
                    <div className="caption">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      </div>
                  </div>
                </div>
             
            )
         })}

      </div>
    </div>  

     
    )
}

export default List;




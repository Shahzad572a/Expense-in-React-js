import React from 'react'

export default function CourseItem({title,id,fetch}) {

debugger
const removeItem =(id) => {
fetch(id)  
}




  return (
    

    <tbody>
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td><button type="button" class="btn btn-danger"  onClick={()=>removeItem(id)}>Delete</button></td>
     
  </tr>
  
  </tbody>
  
     
  )
}




// import CourseItem from "./component/Course/CourseItem/CourseItem";
// import CourseInput from "./component/Course/CourseInput/CourseInput";
// import CourseList from "./component/Course/CourseList/CourseList";
// import { useState } from "react";
// // import uuid from 'react-uuid'
// const dummy = [
//   {title:'Do all exercises',id:'e1'},
//   {title:'Finsh the exercises',id:'e2'}
//  ]

// function App() {
//  const [course,setCourse]= useState(dummy);

//  const addCourse = (obj) => {
//  setCourse(previousState  => {
//    return [obj, ...previousState ]
//   });
//  }

//  const remove = (id) => {
//    const filterarray = course.filter(item => item.id!==id);
//   setCourse(filterarray)
//  }
 
//   return (
//     <div className="App" class="container mt-3">
//       <CourseInput add={addCourse} />
//    <CourseList remove={remove} goal={course}/> 
//     </div>
    
  
 

//   );
// }

// export default App;

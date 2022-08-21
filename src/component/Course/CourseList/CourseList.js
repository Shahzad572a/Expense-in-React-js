import React from 'react'
import CourseItem from '../CourseItem/CourseItem'
import './CourseList.css'
export default function CourseList(props) {

  if (props.goal.length === 0) {
    return <h2 className='goal-list__fallback'>Found no Goal</h2>
   }
     
  const fetchid =(id) => {
props.remove(id)
  }
  
  return (
    <>
    <br></br>
    <table class="table table-hover" id='goal-list'>
  <thead>
  <tr>
 <th>ID</th>
 <th>Title</th>
 <th>Remove</th>
 </tr>
 </thead>
    {props.goal.map(goal => (
        <CourseItem 
        key={goal.id} 
        id={goal.id}
        title={goal.title}
        fetch ={fetchid}
        />
    ))}
    </table>
    </>
  )
}

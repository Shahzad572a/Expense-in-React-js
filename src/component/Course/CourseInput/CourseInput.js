import React, { useState } from 'react'
 

import './CourseInput.css'




export default function CourseInput(props) {

    const [text,setText] = useState('');
    const [isValid, setIsValid] =useState(true)     //this hook is use for to give alert and 'red error color'

    const onChangeHandler = (e) => {
      if (e.target.value.trim().length > 0){   //this condition is used for remove the error color when typeing text 
        setIsValid(true)
      }
        setText(e.target.value);
    }


    const submitHandler = (e) => {
    e.preventDefault();
    
         const obj = {
          title:text,
          id:Math.random().toString()
        }
        setText('');
        // This condition is used for to prevent the 'saved empty' in form 
        if (text.trim().length === 0) {
          return setIsValid(false)
        }
         props.add(obj);

         }

  return (
    <form className={`form-control ${!isValid ? 'invalid': ''}`}>
        <div>
            <label>CourseGoal</label> <br />
            <input type="text" value={text} onChange={onChangeHandler} />
        </div>  <br />
        <button onClick={submitHandler} type="submit" className='btn btn-primary'>Add goal</button>
    </form>
  )
}


{/* <label style={{color: !isValid ? 'red' : 'black'}}>CourseGoal</label> <br />
<input type="text" value={text} onChange={onChangeHandler} 
style={{
  borderColor: !isValid ? 'red' : '#ccc',
  background: !isValid ? 'salmon' : 'transparent',
  
  }} /> */}






 
   
  








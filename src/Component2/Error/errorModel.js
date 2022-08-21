 import React from 'react'
 import './Error.css'
 
 export default function ErrorModel({tittle,message}) {
   return (
     <div> 
      <div className='backdrop'>
        <header className='model'>
            <h2>{tittle}</h2>
        </header>
        <div className='content'>
            <p>{message}</p>
        </div>
        <footer className='action'>
            <button>Okey</button>
        </footer>

    </div>
     </div>
   )
 }
 
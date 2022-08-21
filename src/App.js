import React, {useEffect, useState } from 'react'
import LogIn from './Component3/Login/LogIn'
import Header from './Component3/MainHeader/Header'
import Home from './Component3/Home/Home'
import List from './crud/List'
export default function App() {
   
  const [isLogin,setisLogin] = useState(false)

   const loginHandler = () => {
    localStorage.setItem('isLogedin','1')
    setisLogin(true)
    
   }

   const logoutHandler = () => {
    setisLogin(false)
    localStorage.removeItem('isLogedin')
   }

 

   useEffect(() => {
    debugger
    const item = localStorage.getItem('isLogedin');
    if(item){
      setisLogin(true);
    }
   })

   
  return (
    <React.Fragment> 
     <Header login={isLogin} onLogout={logoutHandler}/>

   <main>
   {!isLogin && <LogIn onLogin={loginHandler}/>} 
   {isLogin && <List  />}

   </main> 

    </React.Fragment>
  )
}





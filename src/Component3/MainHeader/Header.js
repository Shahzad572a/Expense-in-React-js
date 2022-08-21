import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>

    {props.login && 
    
    <ul class="nav navbar-nav navbar-right">
      <li onClick={props.onLogout}><a href="#"><span class="glyphicon glyphicon-log-in" ></span> Logout</a></li>
    </ul>

    } 
  </div>
</nav>
  )
}

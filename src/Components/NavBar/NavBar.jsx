import React from 'react'
import './NavBar.css'

const navBar = () =>{
    return(
      <>
         <nav class="navbar d-flex justify-content-center align-items-center p-2 mt-4 ">
        <ul class="d-flex list-unstyled m-0 border rounded-5">
        <li class="p-2"><a href="">HOME</a></li>
        <li class="p-2"><a href="">ABOUT ME</a></li>
        <li class="p-2"><a href="">SKILLS</a></li>
    </ul>
</nav>
      </>
    )
}

export default navBar
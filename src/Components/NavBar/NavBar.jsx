import React from 'react'
import './NavBar.css'

const navBar = () =>{
    return(
      <>
         <nav class="navbar d-flex justify-content-center align-items-center p-2 mt-4 ">
        <ul class="d-flex list-unstyled m-0 border rounded-5 p-2 ">
        <li class="pt-2 px-5 "><a href="" class='	'>HOME</a></li>
        <li class="p-2 px-5"><a href="">ABOUT ME</a></li>
        <li class="p-2 px-5"><a href="">SKILLS</a></li>
        <li class="p-2 px-5"><a href="">CONTACTO</a></li>
    </ul>
</nav>
      </>
    ) 
}

export default navBar
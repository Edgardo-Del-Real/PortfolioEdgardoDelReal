import React from 'react'
import './NavBar.css'

const navBar = () =>{
    return(
      <>
        <nav class=" d-flex justify-content-between align-items-center navbar p-2 mt-4 me-2 ms-2">
            <section class="d-flex flex-grow-1 justify-content-center ">
                <ul class="d-flex list-unstyled m-0 borde rounded-5 p-2 bg-dark bg-opacity-50">
                  <li class="pt-2 px-5 ms-2"><a href="#">HOME</a></li>
                  <li class="p-2 px-5 ms-2"><a href="#">ABOUT ME</a></li>
                  <li class="p-2 px-5 ms-2"><a href="#">SKILLS</a></li>
                </ul>
            </section>
            <button type="button" class="bg-dark bg-opacity-50 borde rounded-5 p-3">CONTACT ME</button>
        </nav>

      </>
    ) 
}

export default navBar
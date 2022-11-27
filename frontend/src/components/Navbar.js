import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" >E-Voting</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon bg-primary menu">Menu</span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">E-Voting</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            < Link to={"/Home"} className="nav-link active bg-dark" aria-current="page">Home</Link>
          </li>
          <li className='nav-item'>
            < Link to={"/Register"} className='nav-link active  bg-dark'>Register</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Voterslist"} className="nav-link  bg-dark " >Voter List</Link>
          </li>
        </ul>  
      </div>
    </div>
  </div>
</nav>
      
       
    </div>
  )
}

export default Navbar

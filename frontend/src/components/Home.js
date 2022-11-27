import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='Home '>
      
      <div>
        <img src={require("./nextgenvoters.gif")} className="votinggif"></img>
      </div>
      
      {/* <h1>E-Voting Application</h1> */}
        
      
      <img src={require("./Ashoka_Chakra.png")} className="homeimage "  style={{width:"400px"}}></img>
      <h1>VOTE INDIA 2022</h1>
      <p>Elections Coming Soon Please Register your voter application</p>
      <Link to={"//Voterslist"} >
          <p>For Voter List Details Please click here</p>
      </Link>
      <button className='bg-primary'>
       <Link to={"/Register"} className='nav-link active  bg-primary'>Register</Link>
      </button>
      
      

        
    </div>
  )
}

export default Home

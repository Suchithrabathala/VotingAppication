import React from 'react'
import { Link,BrowserRouter,Route,Routes } from 'react-router-dom'


const Voterlist = () => {
  return (
    <div>
        <div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">WARD 1</h5>
        <p className="card-text">VOTER LIST</p>
        <Link to={"/ward1list"} className="btn btn-primary">Click Here</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">WARD 2</h5>
        <p className="card-text">VOTER LIST</p>
        <Link to={"/ward1list"} className="btn btn-primary">Click Here</Link>
      </div>
    </div>
  </div>

<div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">WARD 3</h5>
        <p className="card-text">VOTER LIST</p>
        <Link to={"/ward1list"} className="btn btn-primary">Click Here</Link>
      </div>
    </div>
  </div>  
  </div>  
  {/* <BrowserRouter>
         
         
               <Routes>
                  <Route exact path="/ward1list" 
                    element={<VoterTable/>} />
                 </Routes>
         
 </BrowserRouter> */}













    </div>

  )
}

export default Voterlist

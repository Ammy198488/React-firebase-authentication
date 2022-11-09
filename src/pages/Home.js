import React from 'react'
import { Link } from "react-router-dom";
import image from '../Images/welcome.png'

const Home = () => {
  return (
    <div className='container d-flex justify-content-center align-content-center'>
        <div className=''>
            <img src={image} alt='welcome' />
            <div className='text-center'>
                <button type="button" className="btn btn-info me-4">
                    <Link style={{textDecoration: 'none'}} className='pe-2' to="/login">
                        Log In
                    </Link>
                </button>  
                <button type="button" className="btn btn-warning">  
                    <Link style={{textDecoration: 'none'}} className='pe-2' to="/signup">
                        SignUp
                    </Link>
                </button>      
            </div>   
      </div>
    </div>
  )
}

export default Home

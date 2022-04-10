import React, { useState } from 'react'
import LoginModal from './Landing/LoginModal';
import SignupModal from './Landing/SignupModal';
import { useNavigate } from "react-router-dom"
import klogo from '../klogo.png'
import { Link } from 'react-router-dom';

function NavBar({ setUser }) {
    const [loginModalOn, setLoginModalOn] = useState(false);
    const [signUpModalOn, setSignUpModalOn] = useState(false)
    // const [showLogout, setShowLogout] = useState(false)
    const navigate = useNavigate();
  
  
    const clickedLogin = () => {
      setLoginModalOn(true)
    }
  
    const clickedSignUp = () => {
      setSignUpModalOn(true)
    }

    function clickedLogout (){
        fetch('/logout', {
            method: 'DELETE'
        })
        setUser(null)
        navigate('/')

    }


  return (
    <div className='px-2 py-7 shadow-md relative'>
        <Link to="/home"><img src={klogo} alt='logo' className='mx-8 h-12 w-12 -mt-3 absolute'/></Link>
        <div className="flex justify-end ">
            <div className="px-8">
                <button className="text-green-600" onClick={clickedLogin}>Login</button>
            </div>
            <div className="px-8">
                <button className="text-green-600" onClick={clickedSignUp} href="">SignUp</button>
            </div>
            <div className="px-8">
                <button className="text-green-600" onClick={clickedLogout}>Logout</button>
            </div>
                {loginModalOn && < LoginModal setLoginModalOn={setLoginModalOn} setUser={setUser}/>}
                {signUpModalOn && < SignupModal setSignUpModalOn={setSignUpModalOn} setUser={setUser}/>}
        </div>
    </div>
  )
}

export default NavBar
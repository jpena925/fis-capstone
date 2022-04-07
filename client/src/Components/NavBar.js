import React, { useState } from 'react'
import LoginModal from './Landing/LoginModal';
import SignupModal from './Landing/SignupModal';
import { useNavigate } from "react-router-dom"

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
    <div className="flex mx-2 my-5 pb-5 justify-end shadow-md">
        <div className="px-8">
            <button className="text-blue-500" onClick={clickedLogin}>Login</button>
        </div>
        <div className="px-8">
            <button className="text-blue-500" onClick={clickedSignUp} href="">SignUp</button>
        </div>
        <div className="px-8">
            <button className="text-blue-500" onClick={clickedLogout}>Logout</button>
        </div>
            {loginModalOn && < LoginModal setLoginModalOn={setLoginModalOn} setUser={setUser}/>}
            {signUpModalOn && < SignupModal setSignUpModalOn={setSignUpModalOn} setUser={setUser}/>}
  </div>
  )
}

export default NavBar
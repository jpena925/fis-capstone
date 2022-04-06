import React, { useState } from 'react'
import LoginModal from './Landing/LoginModal';
import SignupModal from './Landing/SignupModal';

function NavBar() {
    const [loginModalOn, setLoginModalOn] = useState(false);
    const [signUpModalOn, setSignUpModalOn] = useState(false)
    // const [showLogout, setShowLogout] = useState(false)
  
  
    const clickedLogin = () => {
      setLoginModalOn(true)
    }
  
    const clickedSignUp = () => {
      setSignUpModalOn(true)
    }

    const clickedLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
    }


  return (
    <div className="flex mx-2 my-5 justify-end">
    <div className="px-8">
      <button onClick={clickedLogin}>Login</button>
    </div>
    <div className="px-8">
      <button onClick={clickedSignUp} href="">SignUp</button>
    </div>
    <div className="px-8">
      <button onClick={clickedLogout}>Logout</button>
    </div>
    {loginModalOn && < LoginModal setLoginModalOn={setLoginModalOn} />}
    {signUpModalOn && < SignupModal setSignUpModalOn={setSignUpModalOn} />}

  </div>
  )
}

export default NavBar
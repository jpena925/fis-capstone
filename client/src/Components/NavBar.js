import React, { useState, useContext } from 'react'
import LoginModal from './Landing/LoginModal';
import SignupModal from './Landing/SignupModal';
import { useNavigate } from "react-router-dom"
import kairos from '../kairos1.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../App'

function NavBar({ setUser }) {
    const [loginModalOn, setLoginModalOn] = useState(false);
    const [signUpModalOn, setSignUpModalOn] = useState(false)
    // const [showLogout, setShowLogout] = useState(false)
    const navigate = useNavigate();
    const user = useContext(UserContext)
  
  
    const clickedLogin = () => {
      setLoginModalOn(true)
    }
  
    const clickedSignUp = () => {
      setSignUpModalOn(true)
    }

    function clickedLogout (){
        fetch('https://morning-oasis-53860.herokuapp.com/logout', {
            method: 'DELETE'
        })
        setUser(null)
        navigate('/kairos/')

    }


  return (
    <div className='mt-2 py-4 shadow-md relative'>
        <Link to="/kairos/"><img src={kairos} alt='logo' className='mx-8 h-10 w-10 -mt-3 absolute'/><p className='absolute ml-20 mt-1 text-lg'>kairos</p></Link>
        <div className="flex justify-end ">
            <div className="px-5">
                {user ? null : <button className="border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-bold uppercase" onClick={clickedLogin}>Login</button>}
            </div>
            <div className="px-5">
                {user ? null : <button className="border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-bold uppercase" onClick={clickedSignUp} href="">SignUp</button>}
            </div>
            <div className="px-5">
                {user ? <Link to='/kairos/home' className="border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-bold uppercase">Home</Link> : null}
            </div>
            <div className="px-5">
                {user ? <Link to='/kairos/profile' className="border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-bold uppercase">Profile</Link> : null}
            </div>
            <div className="px-5">
                {user ? <button className="border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-bold uppercase" onClick={clickedLogout}>Logout</button> : null}
            </div>
                {loginModalOn && < LoginModal setLoginModalOn={setLoginModalOn} setUser={setUser}/>}
                {signUpModalOn && < SignupModal setSignUpModalOn={setSignUpModalOn} setUser={setUser}/>}
        </div>
    </div>
  )
}

export default NavBar
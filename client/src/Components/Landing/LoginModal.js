import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"


function LoginModal({ setLoginModalOn, setUser }) {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault()
        setError(() => '')
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => setUser(() => data))
                setLoginModalOn(false)
                navigate("/kairos/home")
            } else {
                r.json().then(data => setError(data.error))
                setShowError(true)
            }
        })
        
    }


  return (
    <div className="backdrop-blur-sm fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center ">
            <div className="flex-col justify-center  bg-white py-12 px-12 border-4 border-black-400 rounded-xl ">
                <div className="flex font-semibold text-black mb-6 uppercase" >Welcome back to kairos</div>
                <div className=''>
                    <form>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Username</label>
                    <input 
                        type="text" 
                        className="block w-full  border-black text-gray-700 block py-3 px-2 rounded mb-3" 
                        placeholder="Enter Username"
                        onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                        value={loginData.username}/>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">password</label>
                    <input 
                        type="password" 
                        className="block w-full  border-black text-gray-700 block py-3 px-2 rounded mb-3" 
                        placeholder="******"
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        value={loginData.password}/>
                    {showError ? <p className="text-sm text-red-500 pb-3">{error}</p> : null}
                    <button onClick={handleSubmit} className=" block rounded px-3 py-2 text-white text-sm bg-blue-500 ">Login</button>
                    </form>
                    <button type="submit" onClick={() => setLoginModalOn(false)} className="pt-4 text-sm">Need to Sign up?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginModal
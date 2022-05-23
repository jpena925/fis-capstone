import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupModal({ setSignUpModalOn, setUser }) {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
        zip: ''
    })
    const [errors, setErrors] = useState('')
    const [showErrors, setShowErrors] = useState(false)
    const navigate = useNavigate();

  
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log(signUpData)
        fetch('https://morning-oasis-53860.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(user => setUser(() => user))
                setSignUpModalOn(false)
                navigate('/home')
            } else {
                r.json().then(data => setErrors(data.errors))
                setShowErrors(true)
            }
        })
    }

    const errorsArray = errors ? 
        errors.map(error => <p key={error} className="text-xs text-red-500 pb-3">{error}</p>) : null

  return (
    <div className="backdrop-blur-sm fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center ">
            <div className="flex-col justify-center  bg-white py-12 px-12 border-4 border-black-400 rounded-xl ">
                <div className="flex font-semibold text-black mb-6 uppercase" >Signup For kairos</div>
                <div className=''>
                    <form>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Username</label>
                    <input 
                        type="text" 
                        className="block w-full  border-black text-gray-700 block py-1 px-2 rounded mb-3" 
                        placeholder="Enter Username"
                        onChange={(e) => setSignUpData({...signUpData, username: e.target.value})}
                        value={signUpData.username}/>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">password</label>
                    <input 
                        type="password" 
                        className="block w-full  border-black text-gray-700 block py-1 px-2 rounded mb-3" 
                        placeholder="******"
                        onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                        value={signUpData.password}/>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">confirm password</label>
                    <input 
                        type="password" 
                        className="block w-full  border-black text-gray-700 block py-1 px-2 rounded mb-3" 
                        placeholder="******"
                        onChange={(e) => setSignUpData({...signUpData, password_confirmation: e.target.value})}
                        value={signUpData.password_confirmation}/>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Email</label>
                    <input 
                        type="text" 
                        className="block w-full  border-black text-gray-700 block py-1 px-2 rounded mb-3" 
                        placeholder="email@email.com"
                        onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                        value={signUpData.email}/>
                    <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Current Zip Code</label>
                    <input 
                        type="text" 
                        className="block w-full  border-black text-gray-700 block py-1 px-2 rounded mb-3" 
                        placeholder='123456'
                        onChange={(e) => setSignUpData({...signUpData, zip: e.target.value})}
                        value={signUpData.zip}/>
                    <ul>
                    {showErrors ? errorsArray : null}
                    </ul>
                    <button type='submit' onClick={handleSignUp} className=" block rounded px-3 py-2 text-white text-sm bg-blue-500 ">Sign Up</button>
                    </form>
                    <button onClick={() => setSignUpModalOn(false)} className="pt-4 text-sm">Already have an account?</button>
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default SignupModal
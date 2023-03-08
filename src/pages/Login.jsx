import axios from 'axios';
import React, { useState } from 'react'
import RegistrationService from '../services/Services'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [driverId, setDriverId] = useState("");

    const signIn = async () => {
        try {
            debugger;
            // const res = await RegistrationService.getDriver(name, password);
            let items = {name, password};
            let data = JSON.stringify(items);
            const res = await axios.get(`https://localhost:7141/api/Breakdown/GetActiveDriver/${data.name}/${data.password}`);
            debugger;
            if(res.data.driverName === name && res.data.password === password) {
                setDriverId(res.data.driverId);
                alert("Login Passed");
            }
            
        } catch (error) {
            console.log(error.res);
        }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-96 p-9 shadow-lg bg-white rounded-md">
            <h2 className="text-center mb-3">Login</h2>
            <hr />
            {/* Driver Name input */}
            <div className='mt-2'>
                <label htmlFor="name" className="block text-base mb-2">Driver Name</label>
                <input type="text" id="name" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Driver Name."
                    onChange={(e) => setName({value: e.target.value})}
                />
            </div>
            {/* Password input */}
            <div className='mt-3'>
                <label htmlFor="password" className="block text-base mb-2">Password</label>
                <input type="password" id="password" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Password."
                    onChange={(e) => setPassword({value: e.target.value})}
                />
            </div>
            {/* Login Button */}
            <div className='mt-5'>
                <button type="submit" className="w-full rounded-md border-1 border-indigo-600 bg-indigo-400 hover:bg-indigo-200 text-white hover:text-black"
                    onClick={() => signIn()}
                >
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login
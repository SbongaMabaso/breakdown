import React, { useState } from 'react'
// import { Link, useNavigate  } from 'react-router-dom';
import RegistrationService from '../services/Services'

const Register = () => {
    const [driver, setDriver] = useState("");
    const [company, setCompany] = useState("");
    const [regnumber, setRegnumber] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    // const navigate = useNavigate();

    const registerDriver = async () => {
        var response = await RegistrationService.postDriverInfo({
            DriverName: driver.value,
            CompanyName: company.value,
            RegistrationNumber: regnumber.value,
            Password: password.value,
            RepeatPassword: repeatPass.value,
        });
        debugger;
        if(response.status === 200){
            alert("Driver added!");
            // if(response.data.DriverId != 0){
            //     navigate('/Home');
            // }
        } else {
            alert("Filed");
        }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-1/3 p-9 shadow-lg bg-white rounded-md">
            <h2 className="text-center mb-3">Create Account</h2>
            <hr />
            {/* Driver Name input */}
            <div className='mt-2'>
                <label htmlFor="name" className="block text-base mb-2">Driver Name</label>
                <input type="text" id="name" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Driver Name."
                    onChange={(e) => { setDriver({value: e.target.value}) }}
                />
            </div>
            {/* Company Name input */}
            <div className='mt-2'>
                <label htmlFor="company" className="block text-base mb-2">Company Name</label>
                <input type="text" id="company" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Company Name."
                    onChange={(e) => { setCompany({value: e.target.value}) }}
                />
            </div>
            {/* Registration input */}
            <div className='mt-2'>
                <label htmlFor="registration" className="block text-base mb-2">Registration Number</label>
                <input type="text" id="registration" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Registration Number."
                    onChange={(e) => { setRegnumber({value: e.target.value}) }}
                />
            </div>
            {/* Password input */}
            <div className='mt-3'>
                <label htmlFor="password" className="block text-base mb-2">Password</label>
                <input type="password" id="password" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Password."
                    onChange={(e) => { setPassword({value: e.target.value}) }}
                />
            </div>
            {/* Repeat Password input */}
            <div className='mt-3'>
                <label htmlFor="reppassword" className="block text-base mb-2">Repeat Password</label>
                <input type="password" id="reppassword" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Repeat Password."
                    onChange={(e) => { setRepeatPass({value: e.target.value}) }}
                />
            </div>
            {/* Login Button */}
            <div className='mt-5'>
                <button type="submit" className="w-full rounded-md border-1 border-indigo-600 bg-indigo-400 hover:bg-indigo-200 text-white hover:text-black"
                    onClick={() => { registerDriver(); }}
                >
                    Register
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register
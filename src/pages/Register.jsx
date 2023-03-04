import React from 'react'

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-1/3 p-9 shadow-lg bg-white rounded-md">
            <h2 className="text-center mb-3">Create Account</h2>
            <hr />
            {/* Driver Name input */}
            <div className='mt-2'>
                <label for="name" className="block text-base mb-2">Driver Name</label>
                <input type="text" id="name" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Driver Name."/>
            </div>
            {/* Company Name input */}
            <div className='mt-2'>
                <label for="company" className="block text-base mb-2">Company Name</label>
                <input type="text" id="company" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Company Name."/>
            </div>
            {/* Registration input */}
            <div className='mt-2'>
                <label for="registration" className="block text-base mb-2">Registration Number</label>
                <input type="text" id="registration" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Registration Number."/>
            </div>
            {/* Password input */}
            <div className='mt-3'>
                <label for="password" className="block text-base mb-2">Password</label>
                <input type="password" id="password" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Enter Password."/>
            </div>
            {/* Repeat Password input */}
            <div className='mt-3'>
                <label for="reppassword" className="block text-base mb-2">Repeat Password</label>
                <input type="password" id="reppassword" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Repeat Password."/>
            </div>
            {/* Login Button */}
            <div className='mt-5'>
                <button type="submit" className="w-full rounded-md border-1 border-indigo-600 bg-indigo-400 hover:bg-indigo-200 text-white hover:text-black">
                    Register
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register
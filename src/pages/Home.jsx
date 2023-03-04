import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-indigo-400">
        <div className="border-b-4 w-screen p-9 bg-indigo-600 rounded-md">
            <h3>Break<span>Down</span></h3>
        </div>

        <div className="w-1/2 p-9 mt-10 shadow-lg bg-white rounded-md">
            <p className="text-center">
              Create New Ticket
            </p>
            <hr />
            {/* Breakdown reference */}
            <div className='mt-5'>
                <input type="text" id="bdref" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Breakdown Reference."/>
            </div>
            {/* Driver Name */}
            <div className='mt-5'>
                <input type="text" id="name" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Driver Name."/>
            </div>
            {/* Company Name */}
            <div className='mt-5'>
                <input type="text" id="company" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Company Name."/>
            </div>
            {/* Registration Number */}
            <div className='mt-5'>
                <input type="text" id="registration" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Registration Number."/>
            </div>
            {/* Current Location */}
            <div className='mt-5'>
                <input type="text" id="location" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Current Location."/>
            </div>
            {/* Breakdown DateTime */}
            <div className='mt-5'>
                <input type="date" id="bddate" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md" placeholder="Breakdown Date."/>
            </div>
            {/* Submit Button */}
            <div className='mt-5'>
                <button type="submit" className="w-full rounded-md border-1 border-indigo-600 bg-indigo-400 hover:bg-indigo-200 text-white hover:text-black">
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
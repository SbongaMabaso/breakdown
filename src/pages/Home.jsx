import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-indigo-400">
        <div className="w-screen p-9 bg-indigo-600 rounded-md">
            <h3>Break<span>Down</span></h3>
        </div>

        <div className="w-1/2 p-9 mt-20 shadow-lg bg-white rounded-md">
            <h2>Display Info</h2>
        </div>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import RegistrationService from '../services/Services'

const Home = () => {
    const [info, setInfo] = useState([]);
    const [driver, setDriver] = useState("");
    const [company, setCompany] = useState("");
    const [regnumber, setRegnumber] = useState("");


    const handleChange = (e) => {
        const name = e.target.name;
        setInfo({ ...info, [name]: e.target.value});
    };

    //Generate breakdown reference string
    const breakdownRef = Math.random().toString(36).slice(2);

    // Log breakdown ticket to database
    const sendBreakDownTicket = async () => {
        var response = await RegistrationService.postBreakdown({
            BreakdownRef: breakdownRef.value, 
            DriverName: driver.value,
            CompanyName: company.value,
            RegistrationNumber: regnumber.value,
            // BreakdownDate: datetime.now(),
            // Fk_DriverId: DriverId.value
        });
        debugger;
        if(response.status === 200){
            alert("Driver added!");
        } else {
            alert("Filed");
        }
    } 

    // Fetch driver information from Db
    const fetchDriverInfo = async (DriverId) => {
        try {
            const res = await RegistrationService.getDriverInfo(DriverId);
            setDriver(res.data.driverName);
            setCompany(res.data.companyName);
            setRegnumber(res.data.registrationNumber);
        } catch (error) {
            console.log(error.res);
        }
    }

    useEffect(() => {
        fetchDriverInfo(1) //need to pass Id of an active driver
    }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-indigo-400">
        <div className="border-b-4 w-screen p-9 bg-indigo-600 rounded-md">
            <h3>Break<span>Down</span></h3>
        </div>

        <div className="w-1/2 p-9 mt-5 shadow-lg bg-white rounded-md">
            <p className="text-center">
              Create New Ticket
            </p>
            <hr />
            {/* Breakdown reference */}
            <div className='mt-5'>
                <input disabled="true" type="text" id="bdref" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md"
                    value={breakdownRef} readOnly
                    onChange={(e) => { handleChange(e); }}
                />
            </div>
            {/* Driver Name */}
            <div className='mt-5'>
                <input type="text" id="name" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md"
                    value={driver}
                    onChange={(e) => { handleChange(e); }}
                />
            </div>
            {/* Company Name */}
            <div className='mt-5'>
                <input type="text" id="company" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md"
                    value={company}
                    onChange={(e) => { handleChange(e); }}
                />
            </div>
            {/* Registration Number */}
            <div className='mt-5'>
                <input type="text" id="registration" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md"
                    value={regnumber}
                    onChange={(e) => { handleChange(e); }}
                />
            </div>
            {/* Breakdown DateTime */}
            <div className='mt-5'>
                <input type="date" id="breakdowndate" className="border border-b-4 w-full taxt-base px-2 py-1 rounded-md"
                    onChange={(e) => { handleChange(e); }}
                />
            </div>
            {/* Submit Button */}
            <div className='mt-5'>
                <button type="submit" className="w-full rounded-md border-1 border-indigo-600 bg-indigo-400 hover:bg-indigo-200 text-white hover:text-black"
                    onClick={() => sendBreakDownTicket()}
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
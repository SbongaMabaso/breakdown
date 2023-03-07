import axios from "axios";

class RegistrationService {
    // Services for registering a user
    postDriverInfo = async (item) => {
        try {
            const response = await axios.post("api/Breakdown/AddDriver", {
                "driverName": item.DriverName,
                "companyName": item.CompanyName,
                "registrationNumber": item.RegistrationNumber,
                "password": item.Password,
                "repeatPassword": item.RepeatPassword,
            });

            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Service to send ticket breakdown
    postBreakdown = async (item) => {
        try {
            const response = await axios.post("api/Breakdown/CreateBreakdown", {
                "breakdownRef": item.breakdownRef,
                "companyName": item.CompanyName,
                "driverName": item.DriverName,
                "registrationNumber": item.RegistrationNumber,
                "breakdownDate": item.breakdownDate
            });

            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Service to get drivers information
    getDriverInfo = async (DriverId) => {
        try {
            const response = await axios.get(`api/Breakdown/GetDriver/${DriverId}`);
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default new RegistrationService();
import axios from "axios";

class RegistrationService {
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
}

export default new RegistrationService();
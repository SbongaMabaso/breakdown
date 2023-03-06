import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  //Initialize
  axios.defaults.baseURL = process.env.REACT_APP_APIENDPOINT;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;

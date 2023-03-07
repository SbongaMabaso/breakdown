import axios from "axios";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  //Initialize
  axios.defaults.baseURL = process.env.REACT_APP_APIENDPOINT;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/login" exact component={() => <Login />}/>
        <Route path="/" exact component={() =><Register />}/>
        <Route path="/home" exact component={() =><Home />}/>
      </Routes> */}
      <Home />
      {/* <Register /> */}
    </div>
  );
}

export default App;

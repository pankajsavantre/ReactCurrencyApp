import {BrowserRouter,Route,Routes} from "react-router-dom" 
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Currency from "./Pages/Currency";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/signup" element={ <Signup/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/currency" element={ <Currency/> } />
            <Route path="*" element={ <Error/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

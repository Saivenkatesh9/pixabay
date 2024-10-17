import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Home from "./Components/Home/Home";
import Error from "./Error/Error";

const App = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="*" element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;












// import React from "react";
// import Login from "./Login/Login";
// import Signup from "./Signup/Signup";
// import Nav from "./Mainwebpage/Components/Navigational/Nav";
// import Home from "./Mainwebpage/Components/Home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import {Link} from 'react-router-dom'

// const App =()=>{
//     return(
//         <>
//             <Login></Login>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Login/>}></Route>
//                 <Route path="/signup" element={<Signup/>}></Route>
//             </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default App
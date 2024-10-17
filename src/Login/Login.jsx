import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        const storedEmail = localStorage.getItem('email');
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if ((email === storedEmail || email === storedUsername) && password === storedPassword) {
            window.location.href = '/home';
        } else {
            alert('Invalid credentials!');
        }
    };
    return (
        <>
            <div id="navv">
                <div id="borr">
                    <div id="logg">
                        <h1>Login</h1>
                    </div>
                    <div id="inn">
                        <input type="text" placeholder="Email Address / UserName" onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button id="bu" onClick={handleLogin}>Login</button>
                    <div id="nott">
                        <p>
                            Not a Member? <Link to="/signup"><span>Signup</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

























// import React from "react";
// import './Login.css'
// // import Signup from "../Signup/Signup";
// // import Home from "../Mainwebpage/Components/Home/Home";
// import {Link} from 'react-router-dom'
// import { useState ,useNavigate } from "react";
// const Login =()=>{
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [user, setuser] = useState('');
//     const [pass, setPass] = useState('');
    

//     const handleLogin = () => {
//         const storedUser = localStorage.getItem('email');
//         const storedPassword = localStorage.getItem('password');
//         setuser(storedUser)
//         setPass(storedPassword)
//         if (email === storedUser && password === storedPassword) {
//             window.location.href = '/home'; 
//         } else {
//             alert('Invalid credentials!');
//         }
        
        
//     };
//     return(
//         <>
//         <div id="navv">
//             <div id="borr">
//                 <div id="logg">
//                     <h1>Login </h1>
//                 </div>
//                 <div id="inn">
//                 <input type="text" placeholder="Email Address / UserName" onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
//                 </div>
//                 <button id="bu" onClick={handleLogin}>Login</button>
//                 <div id="nott"><p>Not a Member? <Link to="/signup"><h4>Signup</h4></Link></p></div>
//             </div>
//         </div>
//         <h1>{user}</h1>
//         <h1>{pass}</h1>
//         </>
//     )
// }
// export default Login
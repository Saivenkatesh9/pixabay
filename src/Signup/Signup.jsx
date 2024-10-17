import React from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [confirmPassword, setConfPass] = useState("");

    const handleSubmit = (e) => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Sign-up successful! Data stored in localStorage.");
    };

    return (
        <div id="nav">
            <div id="bor">
                <div id="log">
                    <h1>Signup</h1>
                </div>
                <div id="in">
                    <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="UserName" value={username} onChange={(e) => setUser(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPass(e.target.value)}/>
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfPass(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>SignUp</button>
                <div id="not">
                    <p>
                        Have an account? <Link to="/"><h4>Login</h4></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;















// import React from "react";
// import './Signup.css'
// import { Link } from "react-router-dom";
// import { useState } from "react";
// const Signup =()=>{
    
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         if (password !== confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }

//         localStorage.setItem("email", email);
//         localStorage.setItem("username", username);
//         localStorage.setItem("password", password);
        
//         alert("Sign-up successful! Data stored in localStorage.");
//         console.log(localStorage.getItem('email'));
//         console.log(localStorage.getItem('password'));
//     };
//     return(
//         <>
//         <div id="nav">
//             <div id="bor">
//                 <div id="log">
//                     <h1>Signup </h1>
//                 </div>
//                 <div id="in">
//                 <input type="text" placeholder="Email Address " />
//                 <input type="text" placeholder="UserName" />
//                 <input type="password" placeholder="Password"/>
//                 <input type="password" placeholder="Confirm Password"/>
//                 </div>
//                 <button onClick={handleSubmit}>SignUp</button>
//                 <div id="not"><p>Have account? <Link to="/"><h4>Login</h4></Link></p></div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Signup
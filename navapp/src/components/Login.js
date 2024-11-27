import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", pwd: "", error: "" })
    const getTextInput =(e)=>{
        const {name,value}=e.target;
        setUser((prevUser)=>({
            ...prevUser,[name]:value,
        }))
    }
    const aunthenticate = () => {
        //console.log(user);
        if (user.username === "Admin" && user.pwd === "abc@123") {
            setUser({ username: "", pwd: "", error: "" })
            navigate('/');
        } else {
            setUser({'error':"Please check your username and password !"})
        }


    }
    return (
        <div>
            
            <table align="center">
                <tr>
                    <td><h1>Login here</h1></td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username"  onChange={getTextInput}/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="pwd" onChange={getTextInput} /></td>
                </tr>
                <tr>
                    <td style={{ color: 'red' }} colSpan={2}>{user.error}</td>
                </tr>
                <tr>
                    <td><button onClick={aunthenticate}>Login</button></td>
                </tr>
            </table>
            
        </div>
    );
}
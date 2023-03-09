import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import "../styles/Form.css";

function SignInComponent(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErrorS, setEmailError] = useState("");
    const [passwordErrorS, setPasswordError] = useState("");

    const navigate = useNavigate();

    const homePage = () =>{
        navigate("/pokedex");
    }
    
    useEffect((e)=> {

    }, [passwordErrorS])

    const handleEmailInputChange = function(e){
        setEmail(e.target.value);
    }

    const handlePasswordInputChange = function(e){
        setPassword(e.target.value);
    }

    const handleRememberMeInputChange = function(e){
        setRememberMe(!rememberMe);
    }
    
    const handleSubmit = function(e) {
        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email can't be empty";
        }

        if (!password) {
            passwordError = "Password can't be empty";
        } else if (password.length < 8) {
            console.log(password.length)
            passwordError = "Password should be at least 8 characters";
        }

        if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            console.log("emailErrorS", emailErrorS)
            console.log("passwordErrorS", passwordErrorS)
            alert(JSON.stringify({emailError: emailError, passwordError: passwordError}));
            e.preventDefault();
        } else {
            // alert(JSON.stringify({email: email, password: password, rememberMe: rememberMe}));
            homePage();
        }
    }

    return (
        <div className="Form-Box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokemon logo"></img>
            <form onSubmit={handleSubmit} className="Form"> 
                <label>Email: </label>
                <input type={"email"}
                       value={email}
                       onChange={handleEmailInputChange}
                       className="Text-Box" 
                />
                <label>Password: </label>
                <input type={"password"}
                       value={password}
                       onChange={handlePasswordInputChange}
                       className="Text-Box" 
                />
                <label>
                    <input type="checkbox"
                       checked={rememberMe}
                       onChange={handleRememberMeInputChange} 
                    />
                    Remember me
                </label>
                <input type="submit" value="Sign In" className="Submit"/>
            </form>
        </div>
    )
}

export default SignInComponent;
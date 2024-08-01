import { useState } from 'react';
import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navig = useNavigate();

    const validateEmail = (emailInput) => {
        return String(emailInput)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid email !");
            return;
        }

        if (!password) {
            toast.error("Chưa nhập password!");
            return;
        }

        //Submit apis
        let res = await postLogin(email, password);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            navig('/');
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => navig('/register')}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                Hoi dan IT
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who’s this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control'
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control'
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button className='btn-submit' onClick={() => handleLogin()}>Login</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navig('/') }}>
                        &#60;&#60;Go to Homepage
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;
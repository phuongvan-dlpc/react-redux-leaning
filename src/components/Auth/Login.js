import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navig = useNavigate();

    const handleLogin = () => {
        alert('You clicked login button! email=' + email + ' password=' + password);
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
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
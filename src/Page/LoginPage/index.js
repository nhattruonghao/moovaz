import React, {useState } from 'react'
import { LoginApi } from '../../Api/MoovazApi';

function LoginPage() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const onChangeInput = e =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setUser({...user, [name]: value}) ;
    }

    const submitLogin = async e =>{
        e.preventDefault();
        try {
            const res = await LoginApi(user);
            console.log(res);
            localStorage.setItem('accessToken', res.data.data.jwToken);
            window.location.href = '/';
        } catch (err) {
            setMessage('Email or password is incorrect, please check again')
        }
    }


    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }
    return (
        <div className="main" style={{backgroundColor: '#f4f4f4'}}>
            <div className="login-page">
                <div className="login-page__wrap">
                    <div className="login-page__wrap__logo">
                        <img src='/asset/img/logo.svg' alt="" />
                    </div>
                    <div className="login-page__wrap__title">
                        <h3>We'll help you move it!</h3>
                    </div>
                    <div className="login-page__wrap__subtitle">
                        <p>Relocation is a chore. With your first step sorted out at moovaz, your relocation experience will be a walk in the park too. Start your moovaz journey, log in now with the details sent to your email address.</p>
                    </div>
                    <div className="login-page__wrap__container">
                        <div className="login-page__wrap__container__left">
                            <img src="/asset/img/login-people.png" alt="" />
                            <div className="text-wrap">
                                <p>Access to our trusted partners</p>
                                <span>Browse through a wide variety of services provided by our trusted partners.</span>
                            </div>
                            <img src="/asset/img/login-boxes.svg" alt="" />
                            <div className="text-wrap">
                                <p>Track your location prep</p>
                                <span>Personalise your dashboard & never miss any updates of your relocation progress.</span>
                            </div>
                            <img src="/asset/img/login-phone.svg" alt="" />
                            <div className="text-wrap">
                                <p>Discover pocket friendly deals and offers</p>
                                <span>Enjoy exclusive discounts and offers provided by our trusted partners.</span>
                            </div>
                        </div>
                        <div className="login-page__wrap__container__right">
                            <div className="login-form">
                                <div className="login-form__title"><h1>Login</h1></div>
                                <form onSubmit={submitLogin}>
                                    <div className="login-form__input">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" name='email' placeholder='For eg. dave@moovaz.life' required onChange={onChangeInput} />
                                    </div>
                                    <div className="login-form__input">
                                        <label htmlFor="password">Password</label>
                                        <input type={isShowPassword ? 'text' : 'password'} name='password' required onChange={onChangeInput} />
                                        <div className="eye-flash-icon" onClick={toggleShowPassword}>
                                            <img src={isShowPassword ? 'asset/img/eye-slash.svg' : 'asset/img/eye.svg' } alt="" />
                                        </div>
                                    </div>
                                    <div className="login-form__msg">
                                        <span>{message}</span>
                                    </div>
                                    <div className="login-form__forgot-password">
                                        <span>Forgot password?</span>
                                    </div>
                                    <div className="login-form__button">
                                        <button type='submit' disabled={user.email.length > 0 && user.password.length > 0 ? false : true} >Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

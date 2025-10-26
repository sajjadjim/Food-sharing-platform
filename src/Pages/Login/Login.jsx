import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {

    const { signInUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //sign in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(err => {
                console.log('Invalid email and password',err);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Email or password are invalid.",
                    showConfirmButton: false,
                    timer: 1000
                });
                
            })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <h2 className='text-center text-4xl font-bold'>Login here.</h2>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email"  />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password"  />
                            <button className="btn btn-neutral mt-4">Login</button>
                            <SocialLogin></SocialLogin>
                            <p className='text-center my-2'>Didn't registered? Please <Link className='text-blue-600 hover:cursor-pointer' to='/signUp'>Register</Link> Now</p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
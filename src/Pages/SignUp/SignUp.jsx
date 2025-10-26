import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        //password validation
        setError(null);
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long.');
        }
        if (!/[A-Z]/.test(password)) {
            return setError('Password must include at least one uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            return setError('Password must include at least one lowercase letter.');
        }

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your account has been created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                        <fieldset className="fieldset">
                            <h2 className='text-center text-4xl font-bold'>SignUp now!</h2>
                            {error && <p className="text-red-500 mb-2">{error}</p>}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Your Name" />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">Sign Up</button>
                            <p className='text-center my-2'>Already registered? Please <Link className='text-blue-600 hover:cursor-pointer' to='/login'>Login</Link> Now</p>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
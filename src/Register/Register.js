import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { EyeOff, Eye } from 'react-hero-icon/solid';
import Icon from 'react-hero-icon';


// const auth = getAuth(app);

const Register = () => {

    //declare state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleName = (e) => {
        const nameValue = e.target.value;
        setName(nameValue)
    }

    const handleEmail = (e) => {
        const emailValue = e.target.value;
        const validCheck = /\S+@\S+\.\S/.test(emailValue);//check pattern for email using regex
        if (!validCheck) {
            setError('Please recheck your email!!');
            return;
        }
        setEmail(emailValue);
        setError('')
    }

    const handlePassword = (e) => {
        const passwordValue = e.target.value;
        if (passwordValue.length === 0) {
            setError('password must have atleast eight charaters with one uppercase, lowercase, digit and special character!!')
            return;
        }
        if (!/(?=.{8,})/.test(passwordValue)) {
            setError('password must be in 8 characters!')
            return;
        }
        if (!/(?=.*?[A-Z])/.test(passwordValue)) {
            setError('password must have atleast one uppercase letter')
            return;
        }
        if (!/(?=.*?[a-z])/.test(passwordValue)) {
            setError('password must have atleast one lowercase letter')
            return;
        }
        if (!/(?=.*?[0-9])/.test(passwordValue)) {
            setError('password must have atleast one digit')
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(passwordValue)) {
            setError('password must have atleast one special character')
            return;
        }
        setPassword(passwordValue);
        setError('')
    }
    // console.log(password);

    // console.log(name, email, password);

    //onSubmit handle method
    // const handleRegister = (e) =>{
    //     e.preventDefault();
    //     const nameValue = e.target.name.value;
    //     setName(nameValue);
    //     const emailValue = e.target.email.value;
    //     setEmail(emailValue);
    //     const passwordValue = e.target.password.value;
    //     setPassword(passwordValue);
    //     console.log(name, email, password);
    //    createUserWithEmailAndPassword(auth, email, password)
    //    .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     // const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     console.error(error);
    //   });
    // }

//toogle show password in input form
    const [showPass, setShowPass] = useState(false);
    const handleshowpassword = () => {
        setShowPass(!showPass);
    }

//create a new user into firebase
    const auth = getAuth(app);
    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateUserName();
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    const updateUserName = () =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setError(error)
          });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <h3 className="text-2xl font-bold text-center">Join us</h3>
                <form>
                    <div className="mt-4">
                        <p className='text-red-600 text-center'><small>{error}</small></p>
                        <div>
                            <label htmlFor='userName' className="block">Name</label>
                            <input onBlur={handleName} name='name' id='userName' type="text" placeholder="Name"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor='email' className="block">Email</label>
                            <input onBlur={handleEmail} name='email' id='email' required type="email" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor='password' className="block">Password</label>
                            <div className='relative'>
                                <input onBlur={handlePassword} name='password' id='password' required type={showPass ? "text" : "password"} placeholder="Password"
                                    className="flex items-center w-full py-2 px-4 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                <label htmlFor='password' className='absolute top-2 right-2'>
                                    <Icon onClick={handleshowpassword} className="cursor-pointer" icon={showPass ? "EyeOff" : "eye"} />
                                </label>
                            </div>
                        </div>
                        {/* <span className="text-xs text-red-400">Password must be same!</span> */}
                        <div onClick={handleRegister}>
                            <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                                Account</button>
                        </div>
                        <div className="mt-6 text-grey-dark">
                            Already have an account?
                            <Link to='/login' className="text-blue-600 hover:underline" href="#">
                                Log in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
import React from 'react'
import {auth} from './firebase';
import './Login.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) =>{
    e.preventDefault();

  auth.signInWithEmailAndPassword(email, password)
  .then(userAuth =>{
    dispatch(login({
      email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
    }));
  }).catch(error => alert(error));
};
  const register = () =>{
    if(!name){
      return alert("Please enter a full name!")
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) =>  {
      userAuth.user.updateProfile({
        displayName : name,
        photoURL : profilePic,
      })
      .then(() =>{
        dispatch(login({
          email : userAuth.user.email,
          uid : userAuth.user.uid,
        }))
      })
    }).catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/582px-LinkedIn_Logo.svg.png?20170711102837" alt="" />

      <form>
        <input value={name} onChange={e => setName(e.target.value)}  placeholder='Full name(Required if registering)' type='text'/>

        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profil pic URL(optional)' type="text" />

        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

        <input value={password} onChange={e => setPassword(e.target.value)}  placeholder='Password' type="password" />

        <button type='submit' onClick={loginToApp}>Sing In</button>
        <p>Not a member?
          <span className='login__register' onClick={register}>Register Now</span>
        </p>
      </form>
    </div>

  )
}

export default Login;
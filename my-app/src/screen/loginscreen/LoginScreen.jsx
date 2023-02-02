import React from 'react';

import '../loginscreen/LoginScreen.scss';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoginScreen() {

  const dispatch = useDispatch()
const accessToken =useSelector(state=>state.auth.accessToken)
const history=useNavigate()
  const handelLogin = () => {
    dispatch(login())
  }
  useEffect(
    ()=>{
   if(accessToken){
    history('/')
   }
    },[accessToken,history])

  return (
    <div className='loginScren'>
      <div className='loginScren__container'>
        <img
          src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
          alt=''
        />
        <button onClick={handelLogin}>Login with google</button>
        <p>Learing react </p>
      </div>
    </div>
  )
}


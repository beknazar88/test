import React  from "react"
import {Form} from './form'
import {useNavigate} from 'react-router-dom'
import {setUser} from '../store/slice/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks"

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate()
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
          console.log(user);
          dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.refreshToken,
          }))
          push('/')
      })
      .catch(console.error);
  };
  return <Form title="Зарегистрироваться" handleClick={handleRegister} />;
};

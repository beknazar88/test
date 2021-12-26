import React from "react";
import { Form } from "./form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks";

export const Login = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        push("/");
      })
      .catch(() => alert("Неверный логин или пароль"));
  };
  return <Form title="Войти" handleClick={handleLogin} />;
};

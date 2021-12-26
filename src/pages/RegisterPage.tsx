import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";
import {makeStyles} from '@mui/styles'
import { Typography } from "@mui/material";

export const RegisterPage = () => {

    const styles = useStyles()
  return (
    <div className={styles.box}>
      <Typography gutterBottom variant="h5" component="div">
      Регистрация
        </Typography>
      <SignUp />
      <p>
      Уже есть аккаунт?<Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

const useStyles = makeStyles({
    box: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: '110px',
    },
  });

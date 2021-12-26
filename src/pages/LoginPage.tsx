import { Link } from "react-router-dom";
import { Login } from "../components/login";
import {makeStyles} from '@mui/styles'
import { Typography } from "@mui/material";

export const LoginPage = () => {

    const styles = useStyles()
  return (
    <div className={styles.box}>
        <Typography gutterBottom variant="h5" component="div">
         Вход
        </Typography>
      <Login />
      <p>
        <Link to="/register">Регистрация</Link>
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
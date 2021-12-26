import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { Container } from "@mui/material";

import {makeStyles} from '@mui/styles'

export const HomePage = () => {

  const { isAuth } = useAuth();
  const styles = useStyles();

  return isAuth ? (
    <div>
      <Container maxWidth="lg">
        <div className={styles.txt}>
          <h2>Добро пожаловать на Тестовый сайт</h2>
        </div>
      </Container>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

const useStyles = makeStyles({
    txt: {
      display: "flex",
      justifyContent: "center",
    },
  });

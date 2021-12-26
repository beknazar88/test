import { Button, Container } from '@mui/material'
import React from 'react'

import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slice/userSlice";

import {makeStyles} from '@mui/styles'
import { Navigate } from 'react-router-dom';

export const Header = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { isAuth, email } = useAuth();
  return (
    <div>
      <Container maxWidth="lg">
        <div className={styles.styleHeader}>
          <div>
            <h3>Тестовый сайт для работы</h3>
          </div>
          <div>
            {isAuth && (
              <>
                {" "}
                {email}{" "}
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => dispatch(removeUser())}
                >
                  Выйти
                </Button>
              </>
            )  }
          </div>
        </div>
      </Container>
    </div>
  );
};


const useStyles = makeStyles({
    styleHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
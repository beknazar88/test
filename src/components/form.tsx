import { Button, Card, CardActions, CardContent, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { RegisterPage } from "../pages/RegisterPage";

type Props = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export const Form = ({ title, handleClick }: Props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    // <div>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(o) => setEmail(o.target.value)}
    //     placeholder="email"
    //   />
    //   <input
    //     type="password"
    //     value={pass}
    //     onChange={(o) => setPass(o.target.value)}
    //     placeholder="password"
    //   />
    // </div>

<Card sx={{ minWidth: 275 }}>
<CardContent>

<Stack
      component="form"
      sx={{
        width: '35ch',
      }}
      spacing={2}
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        label='Логин'
        variant="outlined"
        onChange={(o) => setEmail(o.target.value)}
        size="small"
        type="email"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        label='Пароль'
        variant="outlined"
        onChange={(o) => setPass(o.target.value)}
        size="small"
        type='password'
      />
        <Button size="small" variant="contained" onClick={() => handleClick(email, pass)}>{title}</Button>

    </Stack>
</CardContent>
<CardActions>
{/* <Button size="small"><RegisterPage></RegisterPage></Button> */}
</CardActions>
</Card>
  );
};

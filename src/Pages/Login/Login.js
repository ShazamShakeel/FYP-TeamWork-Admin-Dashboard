import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Logo from "../../Assets/Logo.svg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import http from '../../utils/api';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    marginTop: 20,
    height: theme.mixins.toolbar,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (email && password) {
      console.log(email, password);
      http
        .post("/auth/login", { email, password })
        .then((result) => {
          localStorage.setItem("tm_auth_token", result.data.token);
          history.push("/dashboard")
        })
        .catch((err) => {
          console.error(err.response);
        });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.logo}>
        <img src={Logo} alt="TeamWork Logo" />
      </div>

      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}

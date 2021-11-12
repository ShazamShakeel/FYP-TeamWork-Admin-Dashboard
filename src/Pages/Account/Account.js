import {
  Avatar,
  Button,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      marginTop: 50,
      maxWidth: "50%",
      minWidth: "250px",
    },
    avatarImg: {
      height: theme.spacing(18),
      width: theme.spacing(18),
    },

    input: {
      display: "none",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  };
});
export default function Account() {
  const classes = useStyles();

  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const avatarChangeHandler = (e) => {

  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (email && password) {
      console.log(email, password);
      history.push("/dashboard/account");
    }

    // fetch('http://localhost:3000/user',{
    //   method: 'POST',
    //   headers: {"Content-Type":"application/json"},
    //   body: JSON.stringify({
    //     name: {name},
    //     email: {email},
    //     password: {password}
    //   })
    // })
  };
  return (
    <div className={classes.container}>
        <input
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={avatarChangeHandler}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Avatar
              Button
              alt="Avatar Image"
              src="/Admin Photo.jpg"
              className={classes.avatarImg}
            />
          </IconButton>
        </label>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label="Change Name"
          name="name"
          autoFocus
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Change Email Address"
          name="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Change Password"
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
          Save
        </Button>
      </form>
    </div>
  );
}

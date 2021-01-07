import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from 'react-router-dom';

// Importing CSS
import styles from "./ResetPassword.module.css";
import { Header } from "../Header/Header";

export const ResetPassword = () => {
  const [emailHelperText, setEmailHelperText] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault(); // Prevent Form from submitting

    // First Validating and 'email'
    validateEmail(email);

    if (email !== "" && emailHelperText === "") {
      // Redirection Logic Comes Here
      console.log("Redirect");
    }
  };

  // Email Validator
  const validateEmail = (m) => {
    setEmail(m);
    // Getting matched str
    let matchedStr = m.match(
      /[a-zA-Z0-9_.+-]+@[a-zA-Z]([a-zA-Z0-9]*[-.][a-zA-Z0-9]+)+/
    );

    // Empty Check
    if (m === "") {
      setEmailHelperText("Email is required");
    }
    // Matching Check
    else if (matchedStr && m === matchedStr[0]) {
      setEmailHelperText("");
    }
    // Valid E-mail
    else {
      setEmailHelperText("Email is not a valid email");
    }
  };

  return (
    <div>
      <Header/>
      <div className={`${styles.root} col-sm-8 col-md-5 mx-auto`}>
        <h1 className={styles.h1}>Password Reset</h1>
        <p>
          <span className={styles.span1}>Enter your email to reset your password</span>
        </p>
        <form action="/home" method="POST">
          <TextField
            fullWidth
            type="email"
            variant="outlined"
            label="E-mail"
            required
            error={emailHelperText === "" ? false : true}
            helperText={emailHelperText}
            onChange={(e) => validateEmail(e.target.value)}
            placeholder="E-mail"
            className="mb-3 mt-3"
          />{" "}
          <br />
          <p className={`${styles.p1} pt-2`}>
            Fields that are marked with * sign are required.
          </p>
          <Button
            size="large"
            fullWidth
            className={`${styles.submitButton} mb-3`}
            onClick={(e) => submit(e)}
            variant="contained"
          >
            SEND
          </Button>
          <p>
            Remember your password?
            <Link className={styles.a2} to="/">
              Sign In<ArrowRightAltIcon />{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

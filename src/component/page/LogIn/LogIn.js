import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../othersFile/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
} from "firebase/auth";
import useFireBase from "../../hooks/useFireBase";
// false => Log in
const LogIn = () => {
    const { user } = useFireBase();
    const [isLogIn, SetIsLogIn] = useState(false);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPass, SetConfirmPass] = useState("");
    const [err, SetErr] = useState("");
    const [toastText, SetToastText] = useState("");

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const signInOrLogIn = e => {
        SetIsLogIn(!isLogIn);
    };
    const emailSetUP = e => {
        SetEmail(e.target.value);
    };
    const passwordSetUP = e => {
        SetPassword(e.target.value);
    };
    const confirmPasswordSetUP = e => {
        SetConfirmPass(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPass) {
            SetErr("Password are not matched");
        } else {
            SetErr("");
        }
        if (!isLogIn) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate(from, { replace: true });
                })
                .then(res => SetToastText(res))
                .catch(err => console.error(err));
            // SetToastText("You Sign In");
        } else {
            // const form = e.currentTarget;
            // if (form.checkValidity() === false) {
            //     e.stopPropagation();
            //     return;
            // }
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate(from, { replace: true });
                })
                .catch(err => console.error(err));
            console.log("on the way");
        }
        toastText && toast(toastText);
        console.log("working", user);
    };
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            alert("Email was send");
        });
    };
    const handleSingInGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    };

    let passReset = () => {
        sendPasswordResetEmail(auth, email);
        alert("Email was send");
    };
    return (
        <div className="container py-5">
            <div className="display-4 p-5">
                {isLogIn ? "Sign Up" : "Log In"}
            </div>
            <Form
                autoComplete="username"
                onSubmit={handleSubmit}
                className=" custom-form-container mx-auto"
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        autoComplete="email"
                        onBlur={emailSetUP}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoComplete="current-password"
                        onBlur={passwordSetUP}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                {user?.uid && (
                    <Form.Group>
                        <Form.Text
                            onClick={emailVerification}
                            className="btn text-dark"
                        >
                            Email Verification
                        </Form.Text>
                        <Form.Text
                            onClick={passReset}
                            className="btn text-dark"
                        >
                            Password Reset
                        </Form.Text>
                    </Form.Group>
                )}
                {isLogIn && (
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            autoComplete="current-password"
                            onBlur={confirmPasswordSetUP}
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                        <Form.Text className="text-danger">{err}</Form.Text>
                    </Form.Group>
                )}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={signInOrLogIn}
                        type="checkbox"
                        label="Want to join as a member"
                    />
                </Form.Group>
                <Button variant="primary" type="LogIn">
                    {isLogIn ? "Sign Up" : "Log In"}
                </Button>
            </Form>
            <div className="container-login">
                <hr />
                <button
                    onClick={handleSingInGoogle}
                    className="btn btn-success text-bold mx-auto text-dark w-100 bgBlur"
                >
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    Continue With Google
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;

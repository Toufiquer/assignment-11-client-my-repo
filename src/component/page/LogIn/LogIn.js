import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../othersFile/firebase.init";
// false => Log in
const LogIn = () => {
    const [isLogIn, SetIsLogIn] = useState(false);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPass, SetConfirmPass] = useState("");
    const [err, SetErr] = useState("");

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
        const user = { email, password, confirmPass };
        console.log("working", user);
    };
    const handleSingInGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
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
                        label="Already a member?"
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
        </div>
    );
};

export default LogIn;

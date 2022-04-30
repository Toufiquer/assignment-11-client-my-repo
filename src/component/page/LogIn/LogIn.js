import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// false => Log in
const LogIn = () => {
    const [isLogIn, SetIsLogIn] = useState(false);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPass, SetConfirmPass] = useState("");
    const [err, SetErr] = useState("");
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
        console.log("google log in");
    };
    return (
        <div className="container py-5">
            <div className="display-4 p-5">
                {isLogIn ? "Sign Up" : "Log In"}
            </div>
            <Form
                onSubmit={handleSubmit}
                className=" custom-form-container mx-auto"
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
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
            <div className="container w-50">
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

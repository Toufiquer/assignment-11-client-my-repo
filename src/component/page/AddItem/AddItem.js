import React from "react";
import { Form, Button } from "react-bootstrap";
const AddItem = () => {
    const clickHandle = e => {
        e.preventDefault();
        console.log("working");
    };
    return (
        <div className="container">
            <Form className=" custom-form-container mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="productName"
                        placeholder="Enter Product Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        type="productImage"
                        placeholder="Enter Product Image"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="productDescription"
                        placeholder="Enter Product Description"
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit" onClick={clickHandle}>
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;

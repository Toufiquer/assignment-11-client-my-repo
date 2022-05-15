import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import useFireBase from "../../hooks/useFireBase";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const axios = require("axios").default;

const UpdateItem = () => {
    const { id } = useParams();
    const [validated, setValidated] = useState(false);
    const { user } = useFireBase();
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [productName, SetProductName] = useState("");
    const [productImg, SetProductImg] = useState("");
    const [productDescription, SetProductDescription] = useState("");
    const [productQuantity, SetProductQuantity] = useState(1);
    const [productPrice, SetProductPrice] = useState(1);
    // fetch  User Data
    useEffect(() => {
        SetEmail(user?.email);
        SetName(user?.name);
        const url = `https://mysterious-plateau-19048.herokuapp.com/products/${id}`;
        axios.get(url).then(function (response) {
            // console.log(response);
            const {
                name,
                email,
                productName,
                productImg,
                productDescription,
                productQuantity,
                productPrice,
            } = response.data;
            SetName(name);
            SetEmail(email);
            SetProductName(productName);
            SetProductImg(productImg);
            SetProductDescription(productDescription);
            SetProductQuantity(productQuantity);
            SetProductPrice(productPrice);
        });
    }, [user, id]);
    // Handle Submit
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        const userData = {
            name,
            email,
            productName,
            productImg,
            productDescription,
            productQuantity,
            productPrice,
        };
        console.log(userData);
        const url = `https://mysterious-plateau-19048.herokuapp.com/products/${id}`;
        // Send data to node server
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("successfully Update.");
            })
            .catch(data => console.log(data));
    };
    return (
        <div className="container">
            <div className="display-4 py-2">Update {name}</div>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className=" custom-form-container mx-auto"
            >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        required
                        type="name"
                        placeholder="Enter Name"
                        onChange={e => SetName(e.target.value)}
                        value={name || ""}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a Name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        // value={email}
                        onChange={e => SetEmail(e.target.value)}
                        readOnly
                        type="email"
                        value={email || ""}
                        placeholder="Enter email"
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please Inter an Email.
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProductEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="productName"
                        placeholder="Enter Product Name"
                        onChange={e => SetProductName(e.target.value)}
                        value={productName || ""}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please Enter Product Name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProductImage">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        type="productImage"
                        placeholder="Enter Product Image"
                        onChange={e => SetProductImg(e.target.value)}
                        value={productImg || ""}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please Enter Product Image url.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicProductDescription"
                >
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="productDescription"
                        placeholder="Enter Product Description"
                        onChange={e => SetProductDescription(e.target.value)}
                        value={productDescription || ""}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please Enter Product Description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicProductQuantity"
                >
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Product Quantity"
                        onChange={e => SetProductQuantity(e.target.value)}
                        value={productQuantity || ""}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please Enter Product Quantity.
                    </Form.Control.Feedback>

                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Product Price"
                        onChange={e => SetProductPrice(e.target.value)}
                        value={productPrice || ""}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please Enter Product Price.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateItem;

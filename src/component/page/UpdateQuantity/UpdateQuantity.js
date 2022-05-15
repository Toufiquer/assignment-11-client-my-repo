import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import useFireBase from "../../hooks/useFireBase";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
// this also works with react-router-native

const axios = require("axios").default;

const UpdateQuantity = () => {
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
        console.log(id);
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
        const newQuantity = e.target.quantity.value;
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
        const newUpdateQuantity =
            parseInt(newQuantity) + parseInt(productQuantity);
        userData.productQuantity = newUpdateQuantity;
        console.log(userData);

        const url = `https://mysterious-plateau-19048.herokuapp.com/products/${id}`;
        // Send data to node server for Update
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
                SetProductQuantity(newUpdateQuantity);
                toast("successfully Update.");
            })
            .catch(data => console.log(data));
    };

    const handleDelete = id => {
        console.log("delivered", id);
        const isPermission = window.confirm(
            "Are you sure? It it delete permanently."
        );
        if (isPermission) {
            const url = `https://mysterious-plateau-19048.herokuapp.com/products/${id}`;
            axios.delete(url).then(function (response) {
                console.log(response);
                toast("Successfully deleted.");
            });
        }
    };
    const handleDelivered = e => {
        e.preventDefault();
        if (productQuantity === 0) {
            toast("Nothing have to Delivered");
            return;
        }
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
        let newUpdateQuantity;
        if (productQuantity > 0) {
            newUpdateQuantity = parseInt(productQuantity) - 1;
        }
        userData.productQuantity = newUpdateQuantity;
        console.log(userData);

        const url = `https://mysterious-plateau-19048.herokuapp.com/products/${id}`;
        // Send data to node server for Update
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
                SetProductQuantity(newUpdateQuantity);
                toast("successfully Update.");
            })
            .catch(data => console.log(data));
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <Card>
                        <Card.Img variant="top" src={productImg} />
                        <Card.Body>
                            <Card.Title>{productName}</Card.Title>
                            <Card.Text className="text-justify">
                                {productDescription}
                            </Card.Text>
                            <div className="text-start">
                                <strong className="d-block">
                                    Stock: {productQuantity}
                                </strong>
                                <strong className="d-block">
                                    Price: {productPrice}
                                </strong>
                                <strong className="d-block">
                                    Supplier: {name}
                                </strong>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex w-100 justify-content-between">
                            <button
                                onClick={() => handleDelete(id)}
                                className="btn btn-outline-danger mx-4"
                            >
                                Delete
                            </button>
                            <button
                                onClick={handleDelivered}
                                className="btn btn-outline-success mx-4"
                            >
                                Delivered
                            </button>
                        </Card.Footer>
                    </Card>
                    <div className="display-4 py-2">Add New Quantity</div>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                        className="w-50 custom-form-container mx-auto"
                    >
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicProductQuantity"
                        >
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Product Quantity"
                                name="quantity"
                                required
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please Enter Product Quantity.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Quantity
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateQuantity;

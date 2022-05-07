import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../othersFile/useProducts";

const CardItem = ({
    product: {
        _id,
        name,
        productName,
        productImg,
        productDescription,
        productQuantity,
        productPrice,
    },
    isDel = false,
    isDelivered = false,
    handleDelete,
    handleDelivered,
}) => {
    return (
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
                    <strong className="d-block">Price: {productPrice}</strong>
                    <strong className="d-block">Supplier: {name}</strong>
                </div>
            </Card.Body>
            <Card.Footer className="d-flex w-100 justify-content-between">
                {!isDel && (
                    <Link
                        to="/inventory/order/1"
                        className="btn btn-outline-primary"
                    >
                        Order
                    </Link>
                )}
                {isDel && (
                    <Link
                        to="/inventory/update/1"
                        className="btn btn-outline-primary"
                    >
                        Update
                    </Link>
                )}
                {isDel && (
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-outline-danger mx-4"
                    >
                        Delete
                    </button>
                )}
                {isDelivered && (
                    <button
                        onClick={() => handleDelivered(_id)}
                        className="btn btn-outline-success mx-4"
                    >
                        Delivered
                    </button>
                )}
            </Card.Footer>
        </Card>
    );
};

export default CardItem;

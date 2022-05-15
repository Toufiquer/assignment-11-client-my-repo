import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../../Item/CardItem/CardItem";
import useProducts from "../../hooks/useProducts";
import axios from "axios";
const Inventory = () => {
    const { products, SetProducts } = useProducts();
    // Delete 1 Quantity || Update product
    return (
        <div className="container py-3 ">
            <div className="inventory-container">
                {products.map(product => (
                    <CardItem key={product?._id} product={product}></CardItem>
                ))}
            </div>
            <div className="row py-5">
                <div className="col-12">
                    <hr />
                    <Link
                        to="/manageInventory"
                        className="btn btn-outline-dark mx-5"
                    >
                        Manage Inventory
                    </Link>
                    <Link to="/add" className="btn btn-outline-dark mx-5">
                        Add Item
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;

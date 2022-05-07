import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../../Item/CardItem/CardItem";
import useProducts from "../../othersFile/useProducts";
const Inventory = () => {
    const { products, SetProducts } = useProducts();
    // Delete 1 Quantity || Update product
    const handleDelivered = id => {
        console.log("delivered", id);
        const remaining = products.filter(product => product._id !== id);
        SetProducts(remaining);
    };
    return (
        <div className="container py-3 ">
            <div className="inventory-container">
                {products.map(product => (
                    <CardItem
                        key={product?._id}
                        product={product}
                        isDelivered={"true"}
                        handleDelivered={handleDelivered}
                    ></CardItem>
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

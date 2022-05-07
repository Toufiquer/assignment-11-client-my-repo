import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../../Item/CardItem/CardItem";
import useProducts from "../../othersFile/useProducts";
const Inventory = () => {
    const [products] = useProducts();
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
                        className="btn btn-outline-dark mx-auto"
                    >
                        Manage Inventory
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;

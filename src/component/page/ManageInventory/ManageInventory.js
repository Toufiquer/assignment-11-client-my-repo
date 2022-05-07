import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CardItem from "../../Item/CardItem/CardItem";
import useProducts from "../../othersFile/useProducts";
const ManageInventory = () => {
    const { products, SetProducts } = useProducts();
    // Delete One Product
    const handleDelete = id => {
        const isPermission = window.confirm(
            "Are you sure? It it delete permanently."
        );
        if (isPermission) {
            const url = `http://localhost:3500/products/${id}`;
            axios.delete(url).then(function (response) {
                toast("Successfully deleted.");

                const remaining = products.filter(
                    product => product._id !== id
                );
                SetProducts(remaining);
                console.log(remaining, response);
            });
        }
    };
    return (
        <div>
            <div className="container py-3 ">
                <div className="inventory-container">
                    {products.map(product => (
                        <CardItem
                            key={product?._id}
                            product={product}
                            isDel={"true"}
                            handleDelete={handleDelete}
                        ></CardItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;

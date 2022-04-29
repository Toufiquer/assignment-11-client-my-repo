import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../../Item/CardItem/CardItem";
const Inventory = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="row">
                        <div className="col-12 col-md-6 my-2 mx-auto">
                            <CardItem></CardItem>
                        </div>
                        <div className="col-12 col-md-6 my-2 mx-auto">
                            <CardItem></CardItem>
                        </div>
                        <div className="col-12 col-md-6 my-2 mx-auto">
                            <CardItem></CardItem>
                        </div>
                        <div className="col-12 col-md-6 my-2 mx-auto">
                            <CardItem></CardItem>
                        </div>
                        <div className="col-12 col-md-6 my-2 mx-auto">
                            <CardItem></CardItem>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4  vh-100 cart-container">
                    <div className="row  vh-100 cart-wrap  bg-dark text-light ">
                        <div className="col-12">
                            <Link
                                className="btn btn-outline-primary float-left"
                                to="/addItem"
                            >
                                Add Item
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;

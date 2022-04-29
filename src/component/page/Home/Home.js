import React from "react";
import CardItem from "../../Item/CardItem/CardItem";
import Slider from "../../Item/Slider/Slider";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h2>Latest Inventory</h2>

            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4 my-2 mx-auto">
                        <CardItem></CardItem>
                    </div>
                    <div className="col-12 col-md-4 my-2 mx-auto">
                        <CardItem></CardItem>
                    </div>
                    <div className="col-12 col-md-4 my-2 mx-auto">
                        <CardItem></CardItem>
                    </div>
                    <div className="col-12 col-md-4 my-2 mx-auto">
                        <CardItem></CardItem>
                    </div>
                    <div className="col-12 col-md-4 my-2 mx-auto">
                        <CardItem></CardItem>
                    </div>
                    <div className="col-12 col-md-4 my-2 mx-auto">
                        <CardItem></CardItem>
                    </div>
                    <div className="col-12 my-5">
                        <Link
                            className="btn btn-outline-primary"
                            to="/inventory"
                        >
                            View All Items
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

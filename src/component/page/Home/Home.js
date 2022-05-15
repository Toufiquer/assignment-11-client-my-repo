import React from "react";
import CardItem from "../../Item/CardItem/CardItem";
import Slider from "../../Item/Slider/Slider";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import LatestOrder from "../../othersFile/LatestOrder";
import Review from "../../othersFile/Review";
const Home = () => {
    const { products, SetProducts } = useProducts();
    let newProducts = [...products];
    newProducts.length = 6;
    // Delete 1 Quantity || Update product
    return (
        <div>
            <Slider></Slider>
            <h2>Latest Inventory</h2>

            <div className="container py-3 ">
                <div className="inventory-container">
                    {newProducts.map(product => (
                        <CardItem
                            key={product?._id}
                            product={product}
                            // isDelivered={"true"}
                            // handleDelivered={handleDelivered}
                        ></CardItem>
                    ))}
                </div>
                <div className="row py-5">
                    <div className="col-12">
                        <hr />
                        <Link
                            to="/inventory"
                            className="btn btn-outline-dark mx-auto"
                        >
                            All Items
                        </Link>
                    </div>
                </div>
            </div>
            <LatestOrder></LatestOrder>
            <Review></Review>
        </div>
    );
};

export default Home;

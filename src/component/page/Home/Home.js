import React from "react";
import CardItem from "../../Item/CardItem/CardItem";
import Slider from "../../Item/Slider/Slider";
import { Link } from "react-router-dom";
import useProducts from "../../othersFile/useProducts";
const Home = () => {
    const [products] = useProducts();
    let newProducts = [...products];
    newProducts.length = 6;
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
        </div>
    );
};

export default Home;

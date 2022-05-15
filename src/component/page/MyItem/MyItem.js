import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFireBase from "../../hooks/useFireBase";
import CardItem from "../../Item/CardItem/CardItem";
import auth from "../../othersFile/firebase.init";

const MyItem = () => {
    const { user } = useFireBase();
    const navigate = useNavigate();
    const email = user.email;
    console.log(user, email);
    const [products, SetProducts] = useState([]);
    useEffect(() => {
        const fetchRun = async () => {
            const url = `https://mysterious-plateau-19048.herokuapp.com/myItem?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                });
                console.log(data);
                SetProducts(data);
            } catch (err) {
                console.log(err);
                if (
                    err.response.status === 401 ||
                    err.response.status === 403
                ) {
                    signOut(auth);
                    navigate("/logIn");
                    toast("Err");
                }
            }
        };
        user && fetchRun();
    }, [user, email, navigate]);
    return (
        <div className="container py-5">
            <div className="inventory-container">
                {products.map(product => (
                    <CardItem key={product?._id} product={product}></CardItem>
                ))}
                {products.length === 0 && <h2>Nothing was found.</h2>}
            </div>
        </div>
    );
};

export default MyItem;

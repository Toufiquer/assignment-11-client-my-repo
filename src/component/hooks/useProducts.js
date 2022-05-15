import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useProducts = () => {
    const [products, SetProducts] = useState([]);

    // fetch all products || Get All products
    useEffect(() => {
        const url = `https://mysterious-plateau-19048.herokuapp.com/products`;
        axios.get(url).then(function (response) {
            SetProducts(response?.data);
        });
    }, []);

    return { products, SetProducts };
};

export default useProducts;

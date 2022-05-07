import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3500/products`;
        axios.get(url).then(function (response) {
            SetProducts(response?.data);
        });
    }, []);

    return [products, SetProducts];
};

export default useProducts;

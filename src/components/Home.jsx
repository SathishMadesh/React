import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

let Home = ( )=>{

    let [products,setProducts] = useState([]);

    useEffect(()=>{
        Axios.get('http://127.0.0.1:8000/products.json')
        .then((response)=>{
            setProducts(response.data);
        })
        .catch((error)=>{
            console.error("Error fetching data:", error);
        });
    },[]);

    return <div>
        <pre>{JSON.stringify(products)}</pre>
        {
            products.map((product,id)=>{
                return <div className="cred" key={id}>
                    <div className="card-head">
                        <img src={product.imgurl} alt="image" />
                    </div>
                    <div className="card-body">
                        <h4>{product.name}</h4>
                        <h4>{product.price}</h4>
                    </div>
                </div>
            })
        }
    </div>
}

export default Home
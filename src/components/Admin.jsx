import React from "react";
import { useState } from "react";
import Axios from 'axios';


let Admin = () => {

    // For form submit event
    let[submit,setSubmit] = useState(false);

    // Required fields for product
    let [product,setProduct] = useState({name:'',discription:'',imgurl:'',price:'',quantity:''});

    // For Form events update the values
    let updateHandler = (event) => {
        setProduct({...product,
            [event.target.name]:event.target.value});
    };

    // imageHandler get the image as a file and convert into url and update the value
    let imgHandler = (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load",()=>{
            if (reader.result){
                setProduct({
                    ...product,imgurl:reader.result
                })
            }
            else {
                console.log("Unable to convert")
            }
        })
    };

    let submitHandler = (event) => {
        event.preventDefault();
        Axios.post('http://127.0.0.1:8000/products/',{product},{headers:{
            'Content-Type': 'application/json',
            'x-csrftoken': 'your-csrf-token',
          }})
        .then((response)=>{
            setSubmit(true);
        })
        .catch((error)=>{
            console.log("Can not able to push",error.message)
        })
    }

    return <div>
        <pre>{JSON.stringify(product)}</pre>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" placeholder="Product Name" name="name" onChange={updateHandler} className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Product Discription" name="discription" onChange={updateHandler} className="form-control"/>
            </div>
            <div className="form-group">
                <input type="file" placeholder="Image" name="imgurl" onChange={imgHandler} className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Price" name="price" onChange={updateHandler} className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="QTY" name="quantity" onChange={updateHandler} className="form-control"/>
            </div>

            <input type='submit' value="upload" className='btn btn-warning'/>
        </form>
    </div>
}
export default Admin
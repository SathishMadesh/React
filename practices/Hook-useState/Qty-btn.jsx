import React from "react";
import { useState } from "react";

const Qtybtn = () => {

    let [qty,setqty] = useState(1);

    let subHandler = () => {
        return setqty(qty-1)
    }

    let addHandler = () => {
        return setqty (qty+1)
    }

    return <div>
        <h1>Quantity:{qty}</h1>
        {
            qty >= 2 ? <div><button onClick={subHandler}>-1</button>
            <button onClick={addHandler}>+1</button>
            </div> : <div><button>-1</button><button onClick={addHandler}>+1</button></div>
        }
        
        
    </div>
}

export default Qtybtn
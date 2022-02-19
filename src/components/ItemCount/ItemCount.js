import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = () => {
    const [counter, setCounter, onAdd] = useState(0);

    const counterUP = () =>{
        if (counter < 15){
            setCounter(counter + 1);  
        }
    };
    const counterDown = () =>{
        if (counter > 0){
            setCounter(counter -1);
        }   
    }
  return (
    <div className="contador">
            <h3>Cantidad</h3>
            <p>{counter}</p>
            <button style={{width:'50px'}} onClick={counterUP}>+</button>
            <button style={{width:'50px'}} onClick ={counterDown}>-</button>
        </div>
  )
}

export default ItemCount
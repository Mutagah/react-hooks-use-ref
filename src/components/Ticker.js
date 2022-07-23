import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  //creating the ref setting its initial value 

  const prevPriceRef = useRef(price);

  useEffect (()=>
  {
    const prevPrice = prevPriceRef.current
    //console.log(prevPrice)
    if (price > prevPrice)
    {
      setColor("green")

    }else if(price < prevPrice)
    {
      setColor("red")
    }else 
      {
        setColor("black")
      }
//setting the new value of the ref {This does not trigger re-render}
        prevPriceRef.current = price;
  },[price]);
  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;

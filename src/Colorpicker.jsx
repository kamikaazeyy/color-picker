import React, {useState, useEffect} from 'react';

export default function Colorpicker() {

    const [color, setColor]=useState("#00FFFF")

    useEffect(()=>{
        document.body.style.backgroundColor=color;
    },
    [color]
    );

    function handlecolorChange(event){
        setColor(event.target.value)
    }


    
  return (
    <div className="color-picker-container">
        <h1> Color Picker </h1>
        <div className="Color-Display" style={{backgroundColor: color}}>
            <p>Your selected color is : {color} </p>

        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handlecolorChange}/>
    </div>
  )
}

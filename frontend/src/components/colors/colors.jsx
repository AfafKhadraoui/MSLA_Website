import React from "react";
import './colors.css'
export default function Colors(){
    return(
        <div className="colors">
            <input type="button"  id="Black" value="Black" />
            <input type="button"  id="White" value="White" />
            <input type="button" id="Sky" value="Sky" />
            <input type="button" id="Navy" value="Navy" />
            <input type="button" id="Red" value="Red" />
            <input type="button" id="Green" value="Green" />
            <input type="button" id="Pink" value="Pink" />
            <input type="button" id="Purple" value="Purple" />
        </div>
    )
}
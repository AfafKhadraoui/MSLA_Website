import React from "react";
import './colors.css'

const Colors = ({ onColorSelect, selectedColors }) => {
    const handleColorClick = (e) => {
      const selectedColor = e.target.value;
      onColorSelect(selectedColor); // Call the parent function to add/remove color
    };


    return(
        <div className="colors">
            <button  id="Black" value="Black" onClick={handleColorClick} className={selectedColors.includes("Black") ? "selected" : "" }/>
            <button  id="White" value="White" onClick={handleColorClick} className={selectedColors.includes("White") ? "selected W" : "W" }/>
            <button id="Sky" value="Sky" onClick={handleColorClick} className={selectedColors.includes("Sky") ? "selected" : ""}/>
            <button id="Navy" value="Navy" onClick={handleColorClick} className={selectedColors.includes("Navy") ? "selected" : ""}/>
            <button id="Red" value="Red" onClick={handleColorClick} className={selectedColors.includes("Red") ? "selected" : ""}/>
            <button id="Green" value="Green" onClick={handleColorClick} className={selectedColors.includes("Green") ? "selected" : ""}/>
            <button id="Pink" value="pink" onClick={handleColorClick} className={selectedColors.includes("pink") ? "selected" : ""}/>
            <button id="Purple" value="Purple" onClick={handleColorClick} className={selectedColors.includes("Purple") ? "selected" : ""}/>
        </div>
    )
}
export default Colors
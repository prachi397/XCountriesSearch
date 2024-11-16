import React from "react";
import './card.css';

const Card = ({name,flag,altText}) =>{
    return(
        <div className="countryCard">
            <img src={flag} alt={altText}/>
            <h2>{name}</h2>
        </div>
    )
}
export default Card;
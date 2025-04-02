import React from "react";
import './NewCollection.css';
import NewCollections from '../Assets/new_collections.js';
import Item from "../Item/Item.jsx";

const NewCollection = () =>{
    return(
        <div className="newCollection">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
                {NewCollections.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default NewCollection
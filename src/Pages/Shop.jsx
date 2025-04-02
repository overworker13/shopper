import React from "react";
import Hero from "../Component/Hero/Hero";
import Popular from "../Component/Popular/Popular";
import Offer from "../Component/Offers/Offer";
import NewCollection from "../Component/NewCollection/NewCollection";
import NewsLetter from "../Component/NewsLetter/NewsLetter";

const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}

export default Shop
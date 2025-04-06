import React, {useContext} from "react";
import { ShopContext } from '../Context/ShopContext'
import { useParams } from "react-router";
import BreadCrum from "../Component/Breadcrum/Breadcrum"
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";


const Product = () =>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product = all_product.find((e)=>e.id===Number(productId));
    return(
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
        </div>
    )
}

export default Product
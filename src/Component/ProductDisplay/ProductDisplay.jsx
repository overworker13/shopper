import React from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) =>{
    const {product} = props;
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-Mainimg">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem laborum, illum assumenda fugiat mollitia optio. Quae tenetur distinctio rerum nihil assumenda aperiam eius excepturi labore quia. Repellat, laudantium. Exercitationem, autem.
                </div>
                <div className="productdisplay-roght-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-roght-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <div className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</div>
                <div className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</div>
            </div>
        </div>
    )
}

export default ProductDisplay;
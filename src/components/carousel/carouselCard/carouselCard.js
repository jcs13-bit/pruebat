import React from "react";
import "./carouselCard.css";
import ButtonElement from "../../../elements/button/buttonElement";
export default function CarouselCard({ ...props }) {
    return (
        <div className="carouselCardContainer">
            <div className="hoveredCard">
                <img
                    alt="product"
                    className="carouselCardImage"
                    src="https://assets-built.s3.amazonaws.com/placeholder.png"
                />
                <div className="carouselCardTitle">{props.title}</div>
                <div className="carouselCardPriceToCompare">
                    {props.priceToCompare ? `$${props.priceToCompare}` : ""}
                </div>
                <div className="carouselCardPrice">
                    {props.price ? `$${props.price}` : ""}
                </div>
            </div>
            <ButtonElement
                backgroundColor="#0170E0"
                color="white"
                text="AÑADIR AL CARRITO"
            ></ButtonElement>
        </div>
    );
}

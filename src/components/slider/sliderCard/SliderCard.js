import React from "react";
import "./SliderCard.css";
export default function SliderCard({ ...props }) {
    return (
        <div className="sliderCardContainer">
            <img
                alt="categories"
                className="sliderCardImage"
                src="https://assets-built.s3.amazonaws.com/placeholder.png"
            />
            <p className="sliderCardTitle">{props.title}</p>
        </div>
    );
}

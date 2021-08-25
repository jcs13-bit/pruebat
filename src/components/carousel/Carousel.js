import React from "react";
import "./Carousel.css";
import CarouselCard from "./carouselCard/carouselCard";
export default function Carousel({ ...props }) {
    return (
        <div className="carousel-container">
            <h1
                className="carouselHeader"
                style={{ color: props.color ? props.color : "black" }}
            >
                {props.title}
            </h1>
            <div className="cardsContainer">
                <CarouselCard
                    price="1'100.000"
                    priceToCompare="1'250.000"
                    title="Silla de ruedas Motorizada gris metalizada abatible M2000"
                ></CarouselCard>
                <CarouselCard
                    price="1'100.000"
                    title="Silla de ruedas Motorizada gris metalizada abatible M2000"
                ></CarouselCard>
                <CarouselCard title="Silla de ruedas Motorizada gris metalizada abatible M2000"></CarouselCard>
                <CarouselCard title="Silla de ruedas Motorizada gris metalizada abatible M2000"></CarouselCard>
            </div>
        </div>
    );
}

import React from "react";
import "./Slider.css";
import SliderCard from "./sliderCard/SliderCard";
export default function Slider() {
    return (
        <div className="sliderContainer">
            <SliderCard title="Seguridad en el baño"></SliderCard>
            <SliderCard title="Tapabocas"></SliderCard>

            <SliderCard title="Sillas de ruedas"></SliderCard>

            <SliderCard title="Ayuda en la marcha"></SliderCard>
            <SliderCard title="Sillas de ruedas"></SliderCard>

            <SliderCard title="Ayuda en la marcha"></SliderCard>
        </div>
    );
}

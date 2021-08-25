import React from "react";
import "./Wall.css";
import WallCard from "./wallCard/WallCard";
export default function Wall() {
    return (
        <div className="wallContainer">
            <div className="hr">
                <WallCard
                    title="¿Por qué elegirnos?"
                    buttonTitle="Conoce más sobre nosotros"
                ></WallCard>
            </div>
            <div className="sqr">
                <WallCard title="Tienda surtida"></WallCard>
            </div>

            <div className="sqr2">
                <WallCard title="Usuario interesado"></WallCard>
            </div>
            <div className="hr2">
                <WallCard title="Servicio integral"></WallCard>
            </div>
            <div className="ver">
                <WallCard title="Gente informada"></WallCard>
            </div>
        </div>
    );
}

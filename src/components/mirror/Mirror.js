import React from "react";
import "./Mirror.css";
import MirrorCard from "./mirrorCard/mirrorCard";
export default function Mirror() {
    return (
        <div className="mirrorContainer">
            <MirrorCard
                title="EMPRESAS EN CRECIMIENTO"
                buttonTitle="Ver productos"
            ></MirrorCard>
            <MirrorCard
                title="COMPLEMENTO LINEA DE OXIMETRIA"
                buttonTitle="Ver productos"
            ></MirrorCard>
        </div>
    );
}

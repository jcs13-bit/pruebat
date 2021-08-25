import React from "react";
import "./WallCard.css";
import "../Wall.css";
import ButtonElement from "../../../elements/button/buttonElement";
export default function WallCard({ ...props }) {
    return (
        <div className={`wallCardContainer`}>
            <div className="wallCardWrapper">
                <h1 className="wallCardTitle">{props.title}</h1>
                <div className="button">
                    {props.buttonTitle && (
                        <ButtonElement
                            text={props.buttonTitle}
                            color="054baa"
                            backgroundColor="#DDEB03"
                        ></ButtonElement>
                    )}
                </div>
            </div>
        </div>
    );
}

import React from "react";

import ButtonElement from "../../elements/button/buttonElement";
import "./Banner.css";
export default function Banner({ ...props }) {
    return (
        <div className="bannerContainer">
            <div className="contentWrapper">
                <div className="content">
                    <div className="title">
                        <span className="highlight">{props.highlight}</span>
                        {props.title}
                    </div>
                    <ButtonElement
                        text={props.buttonTitle}
                        backgroundColor="#026DE6"
                        color="white"
                    ></ButtonElement>
                </div>
            </div>
        </div>
    );
}

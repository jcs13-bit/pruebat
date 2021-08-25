import React from "react";

import ButtonElement from "../../../elements/button/buttonElement";
import "./mirrorCard.css";
export default function MirrorCard({ ...props }) {
    return (
        <div className="mirrorCardContainer">
            <div className="contentWrap">
                <div className="content">
                    <div className="title">{props.title}</div>
                    <ButtonElement
                        text={props.buttonTitle}
                        color="054baa"
                        backgroundColor="#DDEB03"
                    ></ButtonElement>
                </div>
            </div>
        </div>
    );
}

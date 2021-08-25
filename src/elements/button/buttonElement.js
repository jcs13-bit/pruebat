import React from "react";
import "./buttonElement.css";
export default function ButtonElement({ ...props }) {
    return (
        <button
            className="buttonElement"
            style={{
                color: props.color ? props.color : "black",
                backgroundColor: props.backgroundColor
                    ? props.backgroundColor
                    : "white",
            }}
        >
            {props.text}
        </button>
    );
}

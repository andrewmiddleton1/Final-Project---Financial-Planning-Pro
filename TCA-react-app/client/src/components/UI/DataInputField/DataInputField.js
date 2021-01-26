import React from "react";
import "./DataInputField.css"

const DataInputField = (props) => (

    <input
        className={["DataInputField", "DataInputField"[props.inputType]].join(" ")}
        onClick={props.clicked}>
        {props.children}
    </input>
);

export default DataInputField;
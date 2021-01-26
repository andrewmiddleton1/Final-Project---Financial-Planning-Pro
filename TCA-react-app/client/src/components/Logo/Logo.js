import React from "react";
import tcaLogo from "../../assets/images/tca.JPG";
import "./Logo.css";


const Logo = (props) => (
    <div className={"Logo"}>
        <img src={tcaLogo} alt="tcaLogo" />
    </div>
);

export default Logo;
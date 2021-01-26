import React from "react";
import "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = () => (
    <ul className={"NavigationItems"}>
        <NavigationItem link="/" active>TCA Client Portal</NavigationItem>



    </ul>

);

export default NavigationItems;
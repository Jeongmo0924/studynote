import React from "react";
import "../assets/scss/header.scss";
import "../assets/css/reset.css";
import HeaderSub from "../components/HeaderSub";

const Header = () => {
    return (
        <div className="header">
            <HeaderSub />
        </div>
    );
};

export default Header;

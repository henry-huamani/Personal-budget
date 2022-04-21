import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return <header>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home/operations">Operations</NavLink>
        <NavLink to="/home/about">About</NavLink>
    </header>
}
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

    return (
        <div>
            <nav>
                <NavLink to="#about">About</NavLink>
                <NavLink to="#services">Services</NavLink>
                <NavLink to="#portfolio">Portfolio</NavLink>
                <NavLink to="#contact">Contact</NavLink>
            </nav>
        </div>
    )
}
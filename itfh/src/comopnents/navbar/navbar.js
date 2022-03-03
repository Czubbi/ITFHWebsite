import React from 'react'
import {Link} from 'react-router-dom'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";

const NavBar = () => {
    return(
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars/>

                <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}>
                    Home
                </NavLink>

                <NavLink 
                  to="/offer" 
                  activeStyle={{ color: 'black' }}>
                    Offer
                </NavLink>

                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
                
            </NavMenu> 
            </Nav>
        </>
    )
}

export default NavBar
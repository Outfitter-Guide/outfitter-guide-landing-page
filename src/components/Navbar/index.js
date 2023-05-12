import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/shed_white.png'
import {
    Nav, 
    NavbarContainer, 
    MobileIcon, 
    MainLogo,
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <MainLogo src={Logo}></MainLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
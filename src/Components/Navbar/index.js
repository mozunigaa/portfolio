import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img
 } from './NavbarElements';
import logo from '../../images/logomoni.png'
 

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value = {{ color: '#fff'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}>
                    <Img src={logo} alt="Logo"/>
                  </NavLogo>
                  {/* <NavLogo to="/" onClick={toggleHome}>Mónica Zúñiga</NavLogo> */}
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks 
                          to="aboutme" 
                          smooth={true} 
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          >About me</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks 
                          to="projects"
                          smooth={true} 
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          >Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks 
                          to="skills"
                          smooth={true} 
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          >Skills</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink 
                      to="contact"
                      smooth={true} 
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      >Contact me</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar

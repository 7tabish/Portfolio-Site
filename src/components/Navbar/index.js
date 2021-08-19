import React from 'react'

import {NavbarContainer, NavbarWrapper, Nav, NavLink, LogoNav,
SocialIcons} from './NavElements';
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';


const Navbar = () => {
    return (
    
    <NavbarContainer>
            <NavbarWrapper>
                <div style={{background:'black',width:'100%',height:'180px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <h1 style={{'fontSize':'52px',color:'#2DFBEB'}}>T</h1>
                <LogoNav to='home'
                           smooth={true}
                           duration={500}
                           >
                               Tabish</LogoNav>
                    <p>Software Engineer</p>
                </div>
                <Nav>
                    <NavLink to='about'
                           smooth={true}
                           duration={500}
                           >About</NavLink>
                    <NavLink
                    to='skills'
                    smooth={true}
                    duration={500}>
                        My skills</NavLink>

                    <NavLink to='portfolio'
                           smooth={true}
                           duration={500}>
                               Portfolio</NavLink>
                  
                </Nav>
                <div style={{display:'flex', justifyContent:'space-around',width:'100%'}}>
      
                    <SocialIcons href='https://www.linkedin.com/in/tabishmanzoor'
                    target='blank'><FaLinkedin color={'white'} size={25}/></SocialIcons>
                    <SocialIcons href='https://github.com/7tabish'
                    target="blank"><FaGithub color={'white'} size={25}/></SocialIcons>

                    <SocialIcons href='https://www.instagram.com/tabish_mnz/'
                    target="blank"><FaInstagram color={'white'} size={25}/></SocialIcons>
                </div>
            </NavbarWrapper>
          
        </NavbarContainer> 
    
    )
}

export default Navbar;

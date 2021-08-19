import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    
} from './SidebarElements';

import {NavbarWrapper, Nav, NavLink,LogoNav} from '../Navbar/NavElements';
import {SocialIcons} from '../Navbar/NavElements';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>

            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <NavbarWrapper>
                <div style={{background:'black',width:'100%',height:'180px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <LogoNav to='home'
                onClick={toggle}
                           smooth={true}
                           duration={500}
                           style={{border:'0',color:'white',fontSize:'32px'}}>
                               Tabish</LogoNav>
                    <p>Software Engineer</p>
                </div>
                <Nav>
                <NavLink to='about'
                           smooth={true}
                           duration={500}
                           onClick={toggle}
                           >About</NavLink>
                    <NavLink
                    to='skills'
                    smooth={true}
                    duration={500}
                    onClick={toggle}>
                        My skills</NavLink>

                    <NavLink to='portfolio'
                           smooth={true}
                           duration={500}
                           onClick={toggle}>
                               Portfolio</NavLink>
                   
                </Nav>
                <div style={{display:'flex', justifyContent:'space-around',width:'50%'}}>
 
      
      <SocialIcons href='https://www.linkedin.com/in/tabishmanzoor'
      target='blank'><FaLinkedin color={'white'} size={24}/></SocialIcons>
      <SocialIcons href='https://github.com/7tabish?tab=repositories'
      target="blank"><FaGithub color={'white'} size={24}/></SocialIcons>
          <SocialIcons href='https://www.instagram.com/tabish_mnz/'
      target="blank"><FaInstagram color={'white'} size={24}/></SocialIcons>

                </div>
            </NavbarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar;

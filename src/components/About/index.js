import React from 'react';
import Info from '../InfoSection';
import {AboutContainer, AboutContent} from './AboutElements';

const About = () => {
    const paragraph1 = "I'm Tabish Manzoor Front-End Software Engineer. I am graduated from University Of Gujrat in Software Engineering I have a serious passion for designing  UI effects, creating intuitive, dynamic user experiences.";
    const paragraph2 = "Well-organised person, problem solver, independent employee with high attention to detail.";
    
    return (
        <AboutContainer id='about'>
        <div id='aboutInfoContainer' style={{width:'600px'}}>
        <Info heading={
            <span style={{color:'#2DFBEB'}}>
                My, Myself & I
            </span>
        }
            paragraphs={
                [<AboutContent>{paragraph1}</AboutContent>,
                <AboutContent>{paragraph2}</AboutContent>]}
            />
        </div>
            
    </AboutContainer>
    )
}

export default About;

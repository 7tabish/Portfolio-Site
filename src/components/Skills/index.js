import React from 'react';
import Info from '../InfoSection';
import {SkillsContainer, SkillsInfo,ExperienceContainer,
    SkillsInfoContainer, MySkills, MySkillsContainer, SkillsContent } from './SkillsElements';
import Experience from '../Experience';


const Skills = () => {
    const paragraph1 = "Since beginning my journey as a freelance developer nearly 1 year ago, I have done remote work for multiple clients and provide them automated solutions.";
    const paragraph2 = "I create secure backend services in Node and responsive websites that are fast, easy to use, and built with best practices.";
    
    return (
        <SkillsContainer id='skills'>
        <SkillsInfoContainer>
            <Info heading={
                <span style={{color:'#2DFBEB'}}>
                    Skills & Experience
                </span>
            }
                paragraphs={
                    [<SkillsContent>{paragraph1}</SkillsContent>,
                    <SkillsContent >{paragraph2}</SkillsContent>]}
                />
        </SkillsInfoContainer>
            <SkillsInfo>
                <MySkillsContainer>
                    <MySkills>
                        <p>React</p>
                    </MySkills>

                    <MySkills>
                        <p>Node</p>
                    </MySkills>

                    <MySkills>
                        <p>Javascript</p>
                    </MySkills>

                    <MySkills>
                        <p>MongoDB</p>
                    </MySkills>
                    <MySkills>
                        <p>Pyhton</p>
                    </MySkills>
                    <MySkills>
                        <p>Html</p>
                    </MySkills>

                    <MySkills>
                        <p>Css</p>
                    </MySkills>
                </MySkillsContainer>
              

                <ExperienceContainer>
                <Experience/>
                </ExperienceContainer>
                
            </SkillsInfo>
            
    </SkillsContainer>
    )
}

export default Skills;

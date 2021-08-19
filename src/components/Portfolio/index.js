import React from 'react';
import {HeadInfo} from '../InfoSection/InfoElements';
import {PortfolioContainer,
     ProjectsContainer,ProjectCard, ProjectName,
    ProjectDesc, ProjectLinks, Link, ProjectTools, ProjectContent} from './PortfolioElements';

import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';


const Portfolio = () => {
    return (
        <PortfolioContainer id='portfolio'>
            <HeadInfo style={{color:'#2DFBEB'}}>Work</HeadInfo>
            <ProjectsContainer>
                <ProjectCard>
                    <ProjectContent>
                        <ProjectName>Helm chart generating tool (FYP)</ProjectName>
                        <ProjectDesc>Helm chart generating tool from fat to thin docker containers.
                            Monitor deployed projects and generate new docker and Kubernetes configuration.
                        </ProjectDesc>
                        <ProjectTools>Python, Django, Docker, Kubernetes, Github API</ProjectTools>
                    </ProjectContent>

                    <ProjectLinks >
                        <Link href='https://github.com/7tabish/kubernetes-services-monitoring-tool'
                        target='blank'><FaGithub size={24}/></Link>
                    </ProjectLinks>
                </ProjectCard>

                <ProjectCard>
                    <ProjectContent>
                    <ProjectName>Amazon Clone</ProjectName>
                    <ProjectDesc>Ecommerce web app with user authentication, allow to filter products make an order and view the past orders. Manage all products by admin.</ProjectDesc>
                    <ProjectTools>React, Node, axios, Context Api, MongoDB, LocalStorage</ProjectTools>
                </ProjectContent>
                    <ProjectLinks >
                    <Link href='https://github.com/7tabish/AmazonClone'
                    target='blank'
                    ><FaGithub size={24}/></Link>
                    </ProjectLinks>
                </ProjectCard>

                <ProjectCard>
                    <ProjectContent>
                    <ProjectName>Portfolio</ProjectName>
                    <ProjectDesc>Build personal portfolio in react from scratch. Use only CSS, did not use any UI framework.</ProjectDesc>
                    <ProjectTools>React, Styled Components</ProjectTools>
                </ProjectContent>
                    <ProjectLinks >
                    <p></p>
                    <Link href="/">
                        <FiExternalLink size={24}/>
                    </Link>
                    </ProjectLinks>
                </ProjectCard>

                <ProjectCard>
                    <ProjectContent>
                    <ProjectName>React UI for virtual banking</ProjectName>
                    <ProjectDesc>One page react UI to describe the services of a company providing virtual banking.</ProjectDesc>
                    <ProjectTools>React, Styled Components</ProjectTools>
                </ProjectContent>
                    <ProjectLinks >
                    <Link href='https://github.com/7tabish/VirtualBanking_ReactUI'
                    target='blank'
                    ><FaGithub size={24}/></Link>

                    <Link href='https://virtualbanking.netlify.app/'
                    target='blank'
                    ><FiExternalLink size={24}/></Link>
                    </ProjectLinks>
                </ProjectCard>

                <ProjectCard>
                    <ProjectContent>
                    <ProjectName>Node API for patreon users</ProjectName>
                    <ProjectDesc>Rest endpoints in Nodejs to maintain record of subscribed patreon users and
                         provide them specific benifits according to their subscribed level</ProjectDesc>
                    <ProjectTools>Nodejs, MongoDb</ProjectTools>
                </ProjectContent>
                    <ProjectLinks >
                    <Link href='https://github.com/7tabish/patreon-api'
                    target='blank'
                    ><FaGithub size={24}/></Link>
                    </ProjectLinks>
                </ProjectCard>


                <ProjectCard>
                    <ProjectContent>
                    <ProjectName>Covid tracker</ProjectName>
                    <ProjectDesc>Small weekend project to view the stats of covid-19 of all countries</ProjectDesc>
                    <ProjectTools>React, react-chartjs-2, axios, react-countup</ProjectTools>
                </ProjectContent>
                    <ProjectLinks >
                    <Link href='https://github.com/7tabish/covid-tracker'
                    target='blank'
                    ><FaGithub size={24}/></Link>

                    <Link href="https://trackthecovid.netlify.app/"
                    target="blank"
                    ><FiExternalLink size={24}/></Link>
                    </ProjectLinks>
                </ProjectCard>

               
            </ProjectsContainer>
    </PortfolioContainer>
    )
}

export default Portfolio;

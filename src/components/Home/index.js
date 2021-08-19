import React from 'react';
import {HomeContainer, MobileIcon} from './HomeElements';
import {Button} from '../ButtonElement';
import Info from '../InfoSection';
import {FaBars} from 'react-icons/fa';

const Home = ({toggle}) => {

    return (
        <>
        <MobileIcon  onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
        <HomeContainer id='home'>
                      
            <div id='homeInfoContainer'>
            <Info heading={<>Hi,
                <br/>
                I'm <span style={{color:'#2DFBEB',fontWeight:'bold'}}>T</span>abish Manzoor,
                <br/>
                Software Engineer</>}
                
                paragraphs={[<span style={{color:'#777d7a'}}>I love to build dynamic user interfaces in React</span>]}
                />
                  <Button href="mailto:m.tabishmanzoor1@gmail.com">Contact me !</Button>
               
            </div>
                
        </HomeContainer>
        </>
    )
}

export default Home;

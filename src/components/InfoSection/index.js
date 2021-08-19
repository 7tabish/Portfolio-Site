import React from 'react';
import {InfoContainer, InfoWrapper, HeadInfo, ParaInfo,HtmlTags } from './InfoElements';


const index = ({heading,paragraphs}) => {
    return (
        <InfoContainer>
        <InfoWrapper>
            <div>
           <HtmlTags><i>{"<html>"}</i></HtmlTags>
           <HtmlTags style={{marginLeft:'15px'}}><i>{"<body>"}</i></HtmlTags>
           <HtmlTags style={{marginLeft:'15px',marginTop:'40px'}}><i>{"<h1>"}</i></HtmlTags>
           </div>
        <HeadInfo>
            {heading}
        </HeadInfo>
        <div>
        <HtmlTags ><i>{"</h1>"}</i></HtmlTags>
        <HtmlTags style={{marginLeft:'15px'}}><i>{"<p>"}</i></HtmlTags>
        

            {paragraphs.map(paragraph=>(<ParaInfo>{paragraph}</ParaInfo>))}

        <HtmlTags style={{marginLeft:'15px'}}><i>{"</p>"}</i></HtmlTags>
        </div>
    </InfoWrapper>
</InfoContainer>
    )
}

export default index

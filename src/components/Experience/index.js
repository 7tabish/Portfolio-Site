import React from 'react'
import {ExperienceContainer, JobDesc, JobTitle, CompanyName,Date} from './ExperienceElements';

const Experience = () => {
    return (
        <>
        <ExperienceContainer>
            <JobTitle>Software Engineer</JobTitle>
            <CompanyName>Allied Bank Limited</CompanyName>
            <Date>June 2021 - Present</Date>
            {/* <JobDesc><ul>
                <li>Build reusable react code for future use.</li>
                <li>Integrate REST APIs</li>
                <li>Bugs fixing and code optimization</li>
                <li>Collaborate with team members</li>
                </ul>

            </JobDesc> */}
        </ExperienceContainer>

        <ExperienceContainer>
            <JobTitle>Python Developer</JobTitle>
            <CompanyName>GulzarSoft</CompanyName>
            <Date>Jul 2020 - Jun 2021</Date>
            <JobDesc><ul>
                <li>Build reusable react code for future use.</li>
                <li>Integrate REST APIs</li>
                <li>Bugs fixing and code optimization</li>
                <li>Collaborate with team members</li>
                </ul>

            </JobDesc>
        </ExperienceContainer>
        </>
    )
}

export default Experience;

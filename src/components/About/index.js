import React from 'react';
import bioPicture from '../../assets/images/bio-picture.jpg';

const About = () => {
    return(
        <section className='my-5 mx-5'>
            <h1 id='about'>About Me</h1>
            <img src={bioPicture} className='my-3' style={{width: "15%", height: "15%"}} alt="bio" />
            <p>
                I am excited and eager to embark upon a fork in my career path with the intention of combining my 
                existing skills in data analysis with quantitative and qualitative research methods; my emerging skills in data science, data visualization, and 
                full-stack web development; and my life-long commitment and dedication towards social service. I am currently a student at the 
                UT Austin Full-Stack Web Development - Coding Bootcamp and recently completed the UT Austin Data Analytics and Visualization Bootcamp. I am thrilled to pursue opportunities
                that encompass everything I love most, i.e., creativity/artistry; data management and data analysis; data integrity, quality assurance, 
                and quality control; implementing and honing diverse technical skills; working both independently and collaboratively with others; and bringing complex 
                project ideas to life. I am seeking opportunities with organizations and companies whose missions include dedication towards developing ever-evolving 
                innovative and creative technologies and data analytic methods that foster and promote public trust, public service, and positive societal growth and well-being. 
                I'm looking forward to discovering what this next phase of my life brings me!
            </p>
        </section>
    )
}

export default About;
import React from 'react';
import resume from "../../docs/resume.pdf";

function Resume() {
    return (
        <section id='resume' class='resume'>
            <h1>Resume</h1>
            <p className="mx-5 text-center">
            <h3><b>TECHNICAL SKILLS</b></h3>
            <b>|| Languages ||</b> JavaScript, HTML, CSS, Python, Excel VBA <br></br>
            <b>|| Frameworks ||</b> Express, Bootstrap, Foundation, Flask, Progressive Web Application (PWA), Spark <br></br>
            <b>|| Platform & Tools ||</b> Node.js, Jupyter Notebook, pgAdmin, AWS, Google CoLab, Tableau  <br></br>
            <b>|| Version Control ||</b> Git <br></br>
            <b>|| Libraries & Modules ||</b> React, GraphQL, Apollo Server, Sequelize, Mongoose, Handlebars,js, Pandas, Joblib, jQuery, Matplotlib, SQLAlchemy, D3.js, Plotly, Leaflet, NLP <br></br>
            <b>|| Databases ||</b> MySQL, PostgreSQL, SQLite, MongoDB, MS Access, REDCap <br></br>
            <b>|| Statistical Software||</b> R, SPSS, SAS	<br></br><br></br>
            <a href={resume} target="blank"><h4>Download my resume </h4></a>  <br></br>     
            </p>
        </section>
    )
}

export default Resume;
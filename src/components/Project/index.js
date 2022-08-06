import React, {useState} from 'react';
import meetFriendsPicture from '../../assets/images/photo-1533174072545-7a4b6ad7a6c3.avif';
import bellyButtonPicture from '../../assets/images/bellybutton.png';
import weatherPicture from '../../assets/images/screencapture-weather-dashboard.png';
import runBuddyPicture from '../../assets/images/run-buddy.jpg';

function Project() {

    const [projects] = useState([
        {
            title: 'Olympic Medal Predictions',
            application: 'https://olympic-medal-predictions.herokuapp.com/index',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Olympic_rings_without_rims.svg',
            alt: 'Olympic rings',
            github: 'https://github.com/cdeanatx/Olympic_Medal_Predictions' 
        },
        {
            title: 'Meet Friends',
            application: 'https://meet-friends-bootcamp.herokuapp.com/',
            image: meetFriendsPicture,
            alt: 'People at a concert',
            github: 'https://github.com/SD-github21/meet-friends' 
        },
        {
            title: 'Happy Hour',
            application: 'https://sd-github21.github.io/happy-hour/',
            image: 'https://i.insider.com/5c3e2df8c3100e0710201ae3?width=1200&format=jpeg&auto=webp',
            alt: 'Bar with background of shelves with multi-colored containers of liquor',
            github: 'https://github.com/SD-github21/happy-hour' 
        },
        {
            title: 'Bellybutton Biodiversity',
            application: 'https://sd-github21.github.io/Bellybutton-Biodiversity/',
            image: bellyButtonPicture,
            alt: 'Test tubes with dropper',
            github: 'https://github.com/SD-github21/Bellybutton-Biodiversity' 
        },
        {
            title: 'Weather Dashboard',
            application: 'https://sd-github21.github.io/weather-dashboard/',
            image: weatherPicture,
            alt: 'Weather forecasts with search bar',
            github: 'https://github.com/SD-github21/weather-dashboard' 
        },
        {
            title: 'Run Buddy',
            application: 'https://sd-github21.github.io/run-buddy/',
            image: runBuddyPicture,
            alt: 'Runner lacing up shoes',
            github: 'https://github.com/SD-github21/run-buddy' 
        },
    ])

    return (

    <div className="samples">
        {projects.map((project) => (
            <>
            <div className="sample shrink">
            <h3>{project.title}</h3>
                <a href={project.application} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.alt}/>
                        <h4>                
                        <a href={project.github} target="_blank" rel="noreferrer">
                            Link to GitHub Repo
                        </a>
                        </h4>
                </a>
            </div>
            </> 
        ))}             
    </div>
    )
}

export default Project;

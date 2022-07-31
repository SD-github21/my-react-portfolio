import React from 'react';

function Portfolio() {
    return (
        <section id='portfolio' class='portfolio'>
            <h1>Portfolio</h1>

            <div class="samples">
            <div class="first-sample shrink">
                <h3>Olympic Medal Predictions</h3>
                <a href="https://olympic-medal-predictions.herokuapp.com/index" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Olympic_rings_without_rims.svg" alt="Olympic rings"/>
                    <h4>                
                        <a href="https://github.com/cdeanatx/Olympic_Medal_Predictions" target="_blank">
                        Link to GitHub Repo
                        </a>
                    </h4>
                </a>              
            </div>

            <div class="sample shrink">
                <h3>Meet Friends</h3>
                <a href="https://meet-friends-bootcamp.herokuapp.com/" target="_blank">
                    <img src="./assets/images/photo-1533174072545-7a4b6ad7a6c3.avif" alt="people at a concert"/>
                    <h4>                
                        <a href="https://github.com/SD-github21/meet-friends" target="_blank">
                        Link to GitHub Repo
                        </a>
                    </h4>
                </a>              
            </div>

            <div class="sample shrink">
                <h3>Happy Hour</h3>
                <a href="https://sd-github21.github.io/happy-hour/" target="_blank">
                    <img src="https://i.insider.com/5c3e2df8c3100e0710201ae3?width=1200&format=jpeg&auto=webp" alt="Bar with background of shelves with multi-colored containers of liquor"/>
                    <h4>                
                        <a href="https://github.com/SD-github21/happy-hour" target="_blank">
                        Link to GitHub Repo
                        </a>
                    </h4>
                </a>              
            </div>

            <div class="sample shrink">
                <h3>Bellybutton Biodiversity</h3>
                <a href="https://sd-github21.github.io/Bellybutton-Biodiversity/" target="_blank">
                    <img src="./assets/images/bellybutton.png" alt="test tubes with dropper"/>
                    <h4>                
                        <a href="https://github.com/SD-github21/Bellybutton-Biodiversity" target="_blank">
                        Link to GitHub Repo
                        </a>
                    </h4>
                </a>              
            </div>

        </div>
        </section>
    )
}

export default Portfolio;
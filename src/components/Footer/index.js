import React from 'react';
import github from '../../assets/images/github.png'
import stackOverflow from '../../assets/images/stackoverflow.png.ico';

function Footer() {
    return (
        <footer>
            <div>
                <h2>Thank you for visiting my portfolio!</h2>
            </div>
            <div>
                <a href="https://github.com/SD-github21" target="_blank" rel="noreferrer">
                    <img src={github} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/sapana-donde" target="_blank" rel="noreferrer">
                    <img src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/64/linkedin-icon.png" alt="linkedIn icon" />
                </a>
                <a href="https://stackoverflow.com/users/16525678/dreamstar-sc" target="_blank" rel="noreferrer">
                    <img src={stackOverflow} alt="linkedIn icon" />
                </a>
            </div>
      </footer>  
    )
}

export default Footer;
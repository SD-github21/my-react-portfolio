import React from 'react';

function Navigation () {
    return(
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#about'>
                        About me
                    </a>
                </li>
                <li>
                    <a href="#work-samples">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact-me">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>

            </ul>
        </nav>
    )

}

export default Navigation;
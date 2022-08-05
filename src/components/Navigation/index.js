import React from 'react';


function Navigation ({ handlePageChange }) {

    return(
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='/'                    
                    >
                        About me
                    </a>
                </li>
                <li>
                    <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact"
                     onClick={() => handlePageChange('Contact')}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume"
                     onClick={() => handlePageChange('Resume')}
                    >
                        Resume
                    </a>
                </li>

            </ul>
        </nav>
    )

}

export default Navigation;
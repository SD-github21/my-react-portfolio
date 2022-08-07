import React from 'react';


function Navigation ({ currentPage, handlePageChange }) {

    return(
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='/my-react-portfolio'    
                    className={currentPage === 'About' ? 'nav-active' : ''}
                
                    >
                        About me
                    </a>
                </li>
                <li>
                    <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-active' : ''}

                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact"
                     onClick={() => handlePageChange('Contact')}
                     className={currentPage === 'Contact' ? 'nav-active' : ''}

                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume"
                     onClick={() => handlePageChange('Resume')}
                     className={currentPage === 'Resume' ? 'nav-active' : ''}
                    >
                        Resume
                    </a>
                </li>

            </ul>
        </nav>
    )

}

export default Navigation;
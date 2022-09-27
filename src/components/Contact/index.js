import React, {useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState; 
    const [errorMessage, setErrorMessage] = useState('');
    

    function handleChange(event) {
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`Your ${event.target.name} is required.`);
            } else {
                setErrorMessage('');

            }
        }

    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
        if (!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value })

        }
    }

    return (
        <section id='contact' className='contact my-5'>
            <h1 className='mx-3'>Contact Me -- Under Construction | Please send emails of interest to sapanadonde@gmail.com</h1>
            <form id="contact-form" className="mx-5 my-5" onSubmit={handleSubmit} >
                <div className="mx-4 my-3">
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div className="mx-4 my-3">
                    <label htmlFor="email">Email: </label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div >
                    <label htmlFor='message'>Message: </label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" cols="80"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="button my-3 rounded">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
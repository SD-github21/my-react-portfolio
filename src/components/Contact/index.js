import React, {useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState; 

    function handleChange(event) {
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
        }
        setFormState({...formState, [event.target.name]: event.target.value })
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section id='contact' className='contact my-5'>
            <h1 className='mx-3'>Contact Me</h1>
            <form id="contact-form" className="mx-5 my-5" onSubmit={handleSubmit} >
                <div className="mx-4 my-3">
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div className="mx-4 my-3">
                    <label htmlFor="email">Email: </label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div >
                    <label htmlFor='message'>Message: </label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" cols="80"/>
                </div>
                <button type="submit" className="button my-3 rounded">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
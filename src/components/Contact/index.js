import React from 'react';

function Contact() {
    return (
        <section id='contact' className='contact my-5'>
            <h1 className='mx-3'>Contact Me</h1>
            <form id="contact-form" className="mx-5 my-5">
                <div className="mx-3 my-3">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" />
                </div>
                <div className="mx-3 my-3">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" />
                </div>
                <div className="mx-3 my-3">
                    <label htmlFor='message'>Message: </label>
                    <textarea name="message" rows="5"/>
                </div>
                <button type="submit" className="mx-3 my-3">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
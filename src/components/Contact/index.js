import React, { useState } from "react";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', messasge: '' });

    // const { name, email, message } = formState

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={formState.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={formState.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={formState.message} onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
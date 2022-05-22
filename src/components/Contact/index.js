import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', messasge: '' });

    // const { name, email, message } = formState

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            // console.log(isValid)
            if (!isValid) {
                setErrorMessage('Oops! Looks like your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Oops! ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // only allow state to update with the user input if there are no error messages
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    const [successMessage, setSuccessMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
        if (formState === { email: '', name: '', messasge: '' } || errorMessage) {
            setSuccessMessage('')
        } else {
            setSuccessMessage("WooHoo! We will be in touch soon.")
            send('service_i7dx6ia', 'template_1antxeo', formState, 'pwOQzRNiP3-8d9eoq')
        }
    }

    return (
        <section>
            <h2>Let's Connect</h2>
            <p className="connect-text">I would love to hear from you. This form will send your message straight to my inbox.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="Name" defaultValue={formState.name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="Email" defaultValue={formState.email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="Message" rows="5" defaultValue={formState.message} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type="submit">Submit</button>

                {successMessage && (
                    <div>
                        <p className="success-text">{successMessage}</p>
                    </div>
                )}

            </form>
            {/* <p className="formDisclaimer">
                <span className="disclaimer">DISCLAIMER</span>
                Please note this form is currently under construction and does not send a message to my inbox yet.
            </p> */}
        </section>
    )
}

export default ContactForm;
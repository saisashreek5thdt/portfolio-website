import React, { useState } from "react";
import {Form, Button}  from 'react-bootstrap';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../firebase';
export { db } 
const ContactForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const fullNameChangeHandler = (event) => {
        setFullName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const subjecChangeHandler = (event) => {
        setSubject(event.target.value);
    };

    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    };

    const contactSubmitHandler = (event) => {
        event.preventDefault();

 
        addDoc(collection(db, "contact"), {
            name: fullName,
            email: email,
            subject: subject,
            info: message
          })
        .then(() => {
            alert('We recieved your email and our team will get back shortly');
        })
        .catch((err) => {
            alert(err.message);
        });

        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="row col px-5 my-3">
            <Form onSubmit={contactSubmitHandler}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                        type='text'
                        id='fname'
                        placeholder="Enter Your Full Name"
                        value={fullName}
                        onChange={fullNameChangeHandler}
                    />
                    <small className="form-text text-muted"> &nbsp;</small>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type='email'
                        id='emailId'
                        placeholder="Enter Your Email Address"
                        value={email}
                        onChange={emailChangeHandler}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                        type='text'
                        id='subject'
                        placeholder="Enter Your Subject / Title"
                        value={subject}
                        onChange={subjecChangeHandler}
                    />
                    <small className="form-text text-muted"> &nbsp;</small>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows="3"
                        id='message'
                        placeholder="Enter Your Message / Query"
                        value={message}
                        onChange={messageChangeHandler}
                    />
                    <small className="form-text text-muted"> &nbsp;</small>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default ContactForm;

import React from 'react'
import ContactForm from './ContactForm'
import { useDispatch } from 'react-redux'
import { addContact } from '../actions/contactAction'

function ContactAdd(props) {
    const dispatch = useDispatch()
    const handleFormSubmit = (formData) => {
        dispatch(addContact(formData))
    }
    return (
        <div>
            <h2 className='text-center text-muted m-3'>Add Contact</h2>
            <ContactForm handleFormSubmit={handleFormSubmit}/>
        </div>
    )
}

export default ContactAdd
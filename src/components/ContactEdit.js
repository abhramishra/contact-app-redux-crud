import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ContactForm from './ContactForm'
import {updateContact} from '../actions/contactAction'

function ContactEdit(props) {
    const { id } = useParams()

    const contacts = useSelector(state => {
        return state.contacts
    })

    const dispatch = useDispatch()

    const contact = contacts.find(ele => ele.id == id)
    console.log("Contact ", contact)
    const handleFormSubmit = (formData) => {
        dispatch(updateContact(formData))
    }
    return (
        <div>
            <h2 className='text-center text-muted m-3'>Update Contact</h2>
            <ContactForm 
                {...contact}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    )
}

export default ContactEdit
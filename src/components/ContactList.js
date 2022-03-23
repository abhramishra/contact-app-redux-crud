import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeContact } from '../actions/contactAction'

function ContactList(props) {
    const contacts = useSelector((state) => {
        return state.contacts
    })
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        const confirm = window.confirm("Are you sure ?")
        if (confirm) {
            dispatch(removeContact(id))
        }
    }
    return (
        <div className='container'>
            <Link className='btn btn-success m-4' to='/add'>+</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => {
                            const {id, name, email, mobile} = contact
                            return (
                                <tr key={id}>
                                    <td>{ id }</td>
                                    <td>{ name }</td>
                                    <td>{ email }</td>
                                    <td>{ mobile }</td>
                                    <td><Link to={`/update/${id}`} className='btn btn-secondary'>Edit</Link></td>
                                    <td><button onClick={() => handleRemove(id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )          
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ContactList
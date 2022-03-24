import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeContact } from '../actions/contactAction'

function ContactList(props) {
    const [searchItem, setSearchItem] = useState('')
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
            <h2 className='text-center text-muted text-uppercase font-wwight-bold m-3 '>Contact App - ( { contacts.length } )</h2>
            <div className='row'>
                <div className='col-md-2'>
                    <Link className='btn btn-success m-5' to='/add'>+</Link>
                </div>
                <div className='col-md-10'>
                    <form>
                        <input 
                            type='text' 
                            placeholder='Search by name, email or mobile number' 
                            className='form-control m-5' 
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)}  
                        />
                    </form>
                </div>
            </div>
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
                        searchItem.length ? (
                            contacts
                            .filter(ele => {
                                if (ele.name.toLowerCase().includes(searchItem.toLowerCase()) 
                                    || 
                                    ele.email.includes(searchItem)
                                    || 
                                    ele.mobile.includes(searchItem)
                                    ) {
                                    return ele.name
                                }
                            })
                            .map(contact => {
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
                        ) : (     
                            contacts
                            .map(contact => {
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
                        )
                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ContactList
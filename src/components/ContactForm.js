import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ContactForm(props) {
    const navigate = useNavigate()
    const { handleFormSubmit, id, name: fullName, email: emailId, mobile: phone } = props
    const [name, setName] = useState( fullName ? fullName : '' )
    const [email, setEmail] = useState( emailId ? emailId : '' )
    const [mobile, setMobile] = useState( phone ? phone : '' )
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const contacts = useSelector(state => {
        return state.contacts
    })

    const emails = contacts.map(ele => {
        if (ele.id != id) {
            return ele.email
        }
    })
    console.log("Emails  ", emails)


    const phoneNumbers = contacts.map(ele => {
        if (ele.id != id) {
            return ele.mobile
        }
    })
    console.log("Phone numbers ", phoneNumbers)

    const errorStyle = {
        color: 'red'
    }
    const runValidation = () => {
        if (name.trim().length == 0) {
            errors.name = 'Name can\'t be blank !!'
        } else if (email.trim().length == 0) {
            errors.email = 'Email can\'t be blank !'
        } else if (mobile.trim().length == 0 ) {
            errors.mobile = 'Mobile number can\'t be blank !'
        } 
        else if (emails.includes(email)) {
            errors.email = 'Email id should be unique'
        } 
        else if (phoneNumbers.includes(mobile)) {
            errors.mobile = 'Mobile number should be unique'
            console.log("Inside mobile unique ", errors)

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length == 0) {
            const formData = {
                id: id ? id: uuidv4(),
                name: name,
                email: email,
                mobile: mobile
            }
            console.log(formData)
            handleFormSubmit(formData)
            setName('')
            setEmail('')
            setMobile('')
            navigate('/')
        } else {
            setFormErrors(errors)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Full Name</label>
                <input 
                    type='text' 
                    className='form-control' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Full Name'
                />
                {formErrors.name && <span style={errorStyle}>{ formErrors.name }</span> }
            </div>
            <div className='form-group'>
                <label>Email </label>
                <input 
                    type='text' 
                    className='form-control' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value) } 
                    placeholder='Email'
                />
                { formErrors.email && <span style={errorStyle}>{ formErrors.email }</span> }
            </div>
            <div className='form.group'>
                <label>Mobile Number</label>
                <input 
                    type='text' 
                    className='form-control' 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    placeholder='Mobile' 
                    maxLength='10'
                    minLength='10'
                />
                { formErrors.mobile && <span style={errorStyle}>{ formErrors.mobile }</span> }
            </div>
            <input
                type='submit'
                className='btn btn-success'
            />
            <Link className='btn btn-primary m-3' to='/'> Back </Link>
        </form>
    )
}

export default ContactForm
const contactInitialState = [
    { id: 1, name: 'Abhra', email: 'abhra@gmail.com', mobile: '7892611701' },
    { id: 2, name: 'Raja', email: 'raja@gmail.com', mobile: '9066507597' }
]

const contactReducer = (state=contactInitialState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT': {
            return [...state, {...action.payload}]
        }
        case 'EDIT_CONTACT': {
            const contacts = state.map(ele => {
                                if (ele.id == action.payload.id) {
                                    return {...action.payload}
                                } else {
                                    return ele
                                }
                            })
            console.log("EDIT ", contacts)
            return contacts
        }
        case 'REMOVE_CONTACT': {
            const contacts = state.filter(ele => ele.id != action.payload)
            return contacts
        }
        default: return state
    }
}

export default contactReducer
export const addContact = (data) => {
    return {
        type: 'ADD_CONTACT',
        payload: data
    }
}

export const updateContact = (data) => {
    return {
        type: 'EDIT_CONTACT',
        payload: data
    }
}

export const removeContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        payload: id
    }
}
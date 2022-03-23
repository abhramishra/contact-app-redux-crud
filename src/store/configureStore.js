import { createStore, combineReducers } from 'redux'
import contactReducer from '../reducers/contactReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        contacts: contactReducer
    }))
    return store
}

export default configureStore
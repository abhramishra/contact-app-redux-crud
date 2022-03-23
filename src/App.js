import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactList from './components/ContactList'
import ContactAdd from './components/ContactAdd'
import ContactEdit from './components/ContactEdit'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<ContactList/>} />
        <Route path='/add' element={<ContactAdd/>} />
        <Route path='/update/:id' element={<ContactEdit/>} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import NumberList from "./components/NumberList"
import NewPhoneForm from "./components/NewPhoneForm"
import SearchFilter from "./components/SearchFilter"

const App = () => {

    const arrayPers = [
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]

    const [persons, setPersons] = useState(arrayPers)
    const [nameFilter, setNameFilter] = useState('')
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const filteredPersons = persons.filter( person => (person.name).includes(nameFilter))

    const trackNameChanges = (event) => {
        event.preventDefault();
        setNewName(event.target.value)
    }

    const trackNumberChanges = (event) => {
        event.preventDefault();
        setNewNumber(event.target.value)
    }

    const trackNameFilter = (event) => {
        event.preventDefault();
        setNameFilter(event.target.value)
    }

    const addContact = (event) => {
        event.preventDefault();

        const newContact = {
            name: newName,
            phone: newNumber
        }

        const duplicatedContact = arrayPers.filter( person => person.name === newName).length > 0

        if(duplicatedContact){
            alert(`${newContact.name} is currently registered`)
        }else{   
            setPersons(arrayPers.concat(newContact))
        }
        
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter trackNameFilter={trackNameFilter}/>
            <NewPhoneForm addContact={addContact} trackNameChanges={trackNameChanges} trackNumberChanges={trackNumberChanges} /> 
            <NumberList persons={filteredPersons}/>
        </div>
    )
}
 
export default App
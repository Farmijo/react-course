import React from 'react'

const NumberList = ({persons}) => {
    return( 
    <div>
        <h2>Numbers</h2>
        <ul>
            {persons.map(person => {
                return <Person key={person.name} person={person}/>
            })}
        </ul>
    </div>
    )
}

const Person = ({person}) => {
    return (<div>
             <li>{person.name} {person.phone}</li> 
            </div>)
}

export default NumberList
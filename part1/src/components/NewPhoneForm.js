import React from 'react'

const NewPhoneForm = ({addContact, trackNameChanges, trackNumberChanges }) => {

    return (
    <div>  
        <h2> Add a new one:</h2>
            <form onSubmit={addContact}>
                <div>name: <input onChange={trackNameChanges} /></div>
                <div>number: <input onChange={trackNumberChanges}  /></div>
                <div><button type="submit">add</button></div>
            </form>
    </div>
    )
}

export default NewPhoneForm
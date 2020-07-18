import React from 'react'

const SearchFilter = ({trackNameFilter}) => {

    return (
        <div>
            <div>DisplayJust: <input onChange={trackNameFilter}  /></div>
        </div>
    )

}

export default SearchFilter
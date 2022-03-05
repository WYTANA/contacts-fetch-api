import React from 'react'

function Sidebar({ contacts }) {
    return (
        <div className='Sidebar'>
            <h3>Home</h3>
            <h3 onClick={() => alert("🤚Family tab under construction!Please come back later.")}>Family</h3>
            <h3 onClick={() => alert("🤚Friends tab under construction!Please come back later.")}>Friends</h3>
            <h3 onClick={() => alert("🤚Coworkers tab under construction!Please come back later.")}>Coworkers</h3>
            <hr></hr>
            <h4>Number of Contacts: {contacts.length}</h4>
        </div>
    )
}

export default Sidebar

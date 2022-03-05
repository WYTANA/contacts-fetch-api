import React from 'react'
import Contact from './Contact'

function Contactslist({ contacts, images }) {
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>🤖 Robo-Contacts</h1>
            </div>
            {
                contacts.map((contact) => {
                    return <Contact
                        key={contact.id}
                        name={contact.name}
                        number={contact.phone}
                        company={contact.company.catchPhrase}
                        image={`https://robohash.org/${Math.random()}.png` || "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"}
                    />
                })
            }
        </div>
    )
}

export default Contactslist

import React from 'react'
import Contact from './Contact'

function Contactslist({ contacts, photos }) {
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
            </div>
            {
                contacts.map((contact, index) => {
                    return <Contact
                        key={index}
                        name={contact.name}
                        phone={contact.phone}
                        image={photos[index].thumbnailUrl
                            || "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"
                        }
                    />
                })
            }
        </div>
    )
}

export default Contactslist

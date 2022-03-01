import React from 'react'

function Contact({ image, name, number }) {
    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img src={image} alt="Avatar"></img>
            </div>

            <div className="contactInfo">
                <h2>{name}</h2>
                <h2>{number}</h2>
            </div>
        </div>
    )
}

export default Contact

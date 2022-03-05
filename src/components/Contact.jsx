import React from 'react'
import { BsTelephoneFill, BsFillChatLeftQuoteFill } from "react-icons/bs"


function Contact({ image, name, number, company }) {
    // console.log(company.bs)
    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img src={image} alt="robot"></img>
            </div>

            <div className="contactInfo">
                <h2 className="name">{name}</h2>
                <h2 className="phone"><BsTelephoneFill />  {number}</h2>
                <h2 className="company"><BsFillChatLeftQuoteFill /> "{company}"</h2>
            </div>
        </div>
    )
}

export default Contact

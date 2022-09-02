import React from 'react'
import "./contacts.css"
const Contact = () => {
    return (
        <div className="form-outer  place-content-evenly text-white p-30 w-96 ">
            
            <div className="contact-form-header">
                <h2>GET IN TOUCH</h2>
                <p>The customer is very important, the customer will be followed by the customer. Aeneas is a smile. I want to decorate it a few times. Sometimes it's an investment</p>
                    
                    </div>
                    
                    <form>
                <div className="row1"><div><label>Name *</label>
                    <input type="text"></input></div><div><label>Email Address *</label>
                        <input type="email"></input></div></div><div className="row2">
                    <label>Message *</label>
                    <br></br><textarea rows="3">
                    </textarea></div><p className="button-container">
                    <button type="button" className="clear-filter-btn">Send</button>
                </p></form></div>
    )
}

export default Contact
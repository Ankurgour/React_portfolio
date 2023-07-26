import React from "react";

function Contactpage(){
    return(
        <div className="Contact">
        <hr />
        <div className="contact-head">
            <h2>CONTACT</h2>
        </div>
            <form className="contact-form"  action="mailto:ankurgour2003@gmail.com">
                <div className="contact-name">
                    <input type="text" name="" id="" placeholder="Enter your name" required/>
                    <br />
                    <input type="text" name="" id="" placeholder="Enter your email" required/>

                    
                </div>
                <div className="contact-desc">
                    <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                </div>
                <div className="button-sub">
                    <button type="submit">SEND MESSAGE</button>
                </div>
            </form>
        </div>
    )
}
export default Contactpage;
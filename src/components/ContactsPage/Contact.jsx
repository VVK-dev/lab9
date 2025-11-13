import React from "react";
import styles from "./Contact.module.css"


function Contact(){

    return( 
        
        <div className={styles.contact}>

            <header className={styles.contactHeader}>Send Me a Message!</header>

            <form className={styles.contactForm}>
                
                <div className={styles.contactInput} id="contact-name">
    
                    <label htmlFor="contact-input-name">Name:</label>
                    <input type="text" name="ContactName" id="contact-input-name" className={styles.contactInputField}
                    minLength={1}/>

                </div>

                <div className={styles.contactInput} id="contact-email">

                    <label htmlFor="contact-input-email">*Email:</label>
                    <input type="email" name="ContactEmail" id="contact-input-email" className={styles.contactInputField} minLength={1} required/>

                </div>

                <div className={styles.contactInput} id="contact-phone">
                    
                    <label htmlFor="contact-input-phone">Phone:</label>
                    <input type="tel" name="ContactPhone" id="contact-input-phone" className={styles.contactInputField}/>

                </div>

                <div className={styles.contactInput} id="contact-message">
        
                    <label htmlFor="contact-input-message">*Message:</label>
                    <textarea name="Message" id="contact-input-message" className={styles.contactInputField} 
                    minLength={1} required></textarea>

                </div>

                <button type="submit" className={styles.contactSubmitButton}> Send Message </button>

            </form>

        </div>
    )
}

export default Contact;
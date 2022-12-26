import Header from './header';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsInstagram, BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';


const Contact = () => {

   
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_ind6szs', 'template_08fb614', form.current, 'VTj6M78g4E2DiVkau')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          
    }
    return(
        <div>
            <Header />
            <div className="contact-section">
            <div className="container1">
                <div className="contact-header">
                    <h2>Get in touch</h2>
                </div>
                <div className="contact-form">
                    <form  onSubmit={sendEmail}  ref={form} method="POST">
                        <div className="user-details">
                            <div className="inputs">
                                <div className="input-box">
                                    <input type="text" placeholder="Name" name='user_name' required/>
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder="Email" name='user_email' required/>
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="input-box">
                                    <input type="number" placeholder="Phone Number" name='user_phone' required/>
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Subject" name='user_subject' required/>
                                </div>
                            </div>
                            <div className="inputs1">
                                <div className="textarea">
                                    <textarea  placeholder="Your Message" name='message'></textarea>
                                </div>
                            </div>
                            <div className="inputs">
                                <button type="submit" className='mee'>Talk to me</button>
                            </div>
                        </div>
                    </form>
                    <div className="socials">
                        <a href="https://www.instagram.com/_abim.bola_/"><BsInstagram/></a>
                        <a href="https://twitter.com/Bishopakint"> <BsTwitter /></a>
                        <a href="https://api.whatsapp.com/send?phone=%2B2347012991154&text&app_absent=0"><BsWhatsapp/></a>
                        <a href="https://www.linkedin.com/in/bishop-akin-thomas-b32477232/"> <BsLinkedin /></a>
                        <a href="https://github.com/AKIN-THOMAS"> <BsGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Contact;
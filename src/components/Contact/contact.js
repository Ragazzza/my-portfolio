import React, { useState, useRef, useEffect } from 'react';
import './contact.css';
import golden from '../../assets/Golden_4.png'
import linkedIn from '../../assets/LinkedIn.png'
import gitHub from '../../assets/GitHubLink.png'
import Facebook from '../../assets/Facebook.png'
import Insta from '../../assets/Instagram.png'
import emailjs from 'emailjs-com';


const Contact = () => {
    const [showImage, setShowImage] = useState(false);
    const componentRef = useRef(null);
    const [showAlert, setShowAlert] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_97430w8', 'template_02vfuyj', form.current, 'rtKb4umlw4cz4jC-5')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            setShowAlert(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    useEffect(() => {
        const currentRef = componentRef.current;
        const observer = new IntersectionObserver(
          ([entry]) => {
            // If the component is visible (intersecting the viewport)
            if (entry.isIntersecting) {
              setShowImage(true);
            } else {
              setShowImage(false);
            }
          },
          {
            threshold: 0.5, 
          }
        );
    
        if (currentRef) {
          observer.observe(currentRef);
        }
    
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      }, []);

    return (
        <body className='contactBody'ref={componentRef} style={{ position: "relative" }}>
            {showImage && <img src={golden} alt="HappyGolden" style={{position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", zIndex: 2, animation: "slideInFromRight 0.5s forwards"}}/>}   
            <section id='contact'>
                <div className='contactContent'>
                    <span className='contactLine1'>Get in Touch</span>
                    <span className='contactLine2'>Contact Me</span>
                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                        <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                        <textarea className='msg' name='message' rows='5' placeholder='Your Message'/>
                        <button type='submit' value='Send' className='submitBtn'>Submit</button>
                        {showAlert && (<> <div className="alert-backdrop"></div>
                            <div className="custom-alert"> <h1>Thank you!</h1><p>Your email was sent. Check out my other links!</p>
                                <button className='close-alert' onClick={() => setShowAlert(false)}>X</button>
                            </div> </>)}
                        <div className='links'>
                            <a href='https://www.linkedin.com/in/marifran-malinao-a54b14262/'><img src={linkedIn} alt='LinkedIn' className='linksImg' /></a>
                            <a href='https://github.com/Ragazzza'><img src={gitHub} alt='GitHub' className='linksImg' /></a>
                            <a href='https://www.facebook.com/marifran.l.malinao/'><img src={Facebook} alt='Facebook' className='linksImg' /></a>
                            <a href='https://www.instagram.com/maan_malinao/'><img src={Insta} alt='Instagram' className='linksImg' /></a>
                        </div>
                    </form>
                </div>
            </section>
        </body>
    )
}

export default Contact;
import React, { useState, useRef, useEffect } from 'react';
import './about.css';
import Confetti from 'react-confetti';
import usc from '../../assets/USC.png';
import alliance from '../../assets/Alliance.png';
import golden from '../../assets/Golden_1.png'


const About = () => {
    const [showConfetti1, setShowConfetti1] = useState(false);
    const [showConfetti2, setShowConfetti2] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const componentRef = useRef(null);

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
        <body className='aboutBody'ref={componentRef} style={{ position: "relative" }}>
            {showImage && <img src={golden} alt="HappyGolden" style={{position: "absolute", zIndex: 2, animation: "slideInFromLeft 0.5s forwards"}}/>}   
            <section id='about'>
                <div className='aboutContent'>
                    <span className='aboutLine1'>Get to know more</span>
                    <span className='aboutLine2'>About Me</span>
                    <div className='aboutBoxes'>
                        <div className='internship' onMouseEnter={() => setShowConfetti1(true)} onMouseLeave={() => setShowConfetti1(false)}>
                            <h2>Internship</h2><br/>
                            <img src={alliance} alt='Alliance' className='aboutLogos' />
                            <h3>Alliance Software, Inc.</h3>
                            <h5>PCX Development Team</h5>
                            {showConfetti1 && <Confetti />}
                        </div>
                        <div className='education' onMouseEnter={() => setShowConfetti2(true)} onMouseLeave={() => setShowConfetti2(false)}>
                            <h2>Education</h2><br/>
                            <img src={usc} alt='USC' className='aboutLogos' />
                            <h3>University of San Carlos</h3>
                            <h5>BS in Computer Engineering</h5>
                            {showConfetti2 && <Confetti />}
                        </div>
                    </div>
                    <div className='description'>
                        <span className='descriptionText'>Hello, I'm Marifran, a Computer Engineering student who possesses the skills in 
                        Software Development, Web Development, Mobile Application Development and Quality Assurance Testing. I take pride 
                        in constantly doing my best in every task that I am given and I can collaborate effectively within a team. I am 
                        highly motivated to enhance my skills in programming and make meaningful contributions to your team or organization.</span>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default About;
import React, { useState, useRef, useEffect } from 'react';
import './experience.css';
import golden from '../../assets/Golden_2.png'
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import JS from '../../assets/JavaScript.png'
import ReactLogo from '../../assets/REACT.png'
import CSharp from '../../assets/CSharp.png'
import DNet from '../../assets/DotNet.png'
import BS from '../../assets/Bootstrap.png'
import Java from '../../assets/Java.png'
import Python from '../../assets/Python.png'
import VS from '../../assets/VisualStudio.png'
import VSCode from '../../assets/VSCode.png'
import GitHub from '../../assets/GitHub.png'
import Git from '../../assets/Git.png'

const Experience = () => {
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
        <body className='expBody'ref={componentRef} style={{ position: "relative" }}>
            {showImage && <img src={golden} alt="HappyGolden" style={{position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", zIndex: 2, animation: "slideInFromRight 0.5s forwards"}}/>} 
            <section id='experience'>
                <div className='expContent'>
                    <span className='expLine1'>Explore My</span>
                    <span className='expLine2'>Experience</span>
                    <div className='expBoxes'>
                      <div className='skills'>
                        <img src={HTML} alt='HTML' className='skillsImg' />
                        <h4>HTML</h4>
                        <p>Experienced</p>
                      </div>
                      <div className='skills'>
                        <img src={CSS} alt='CSS' className='skillsImg' />
                        <h4>CSS</h4>
                        <p>Experienced</p>
                      </div>
                      <div className='skills'>
                        <img src={JS} alt='JS' className='skillsImg' />
                        <h4>JavaScript</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className='skills'>
                        <img src={ReactLogo} alt='React' className='skillsImg' />
                        <h4>React</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className='skills'>
                        <img src={CSharp} alt='CSharp' className='skillsImg' />
                        <h4>C#</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className='skills'>
                        <img src={DNet} alt='.Net' className='skillsImg' />
                        <h4>ASP.NET Core</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className='skills'>
                        <img src={BS} alt='Bootstrap' className='skillsImg' />
                        <h4>Bootstrap</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className='skills'>
                        <img src={Java} alt='Java' className='skillsImg' />
                        <h4>Java</h4>
                        <p>Basic</p>
                      </div>
                      <div className='skills'>
                        <img src={Python} alt='Python' className='skillsImg' />
                        <h4>Python</h4>
                        <p>Basic</p>
                      </div>
                      <div className='skills'>
                        <img src={VS} alt='VisualStudio' className='skillsImg' />
                        <h4>Visual Studio</h4>
                        <p>Experienced</p>
                      </div>
                      <div className='skills'>
                        <img src={VSCode} alt='VSCode' className='skillsImg' />
                        <h4>VSCode</h4>
                        <p>Experienced</p>
                      </div>
                      <div className='skills'>
                        <img src={GitHub} alt='GitHub' className='skillsImg' />
                        <h4>GitHub</h4>
                        <p>Basic</p>
                      </div>
                      <div className='skills'>
                        <img src={Git} alt='Git' className='skillsImg' />
                        <h4>Git</h4>
                        <p>Basic</p>
                      </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default Experience;
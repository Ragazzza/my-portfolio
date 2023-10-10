import React, { useState, useRef, useEffect } from 'react';
import './projects.css';
import golden from '../../assets/Golden_3.png'
import project1 from '../../assets/Project_USCCMPC.png'
import CSharp from '../../assets/CSharp.png'
import Dotnet from '../../assets/DotNet.png'
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import BS from '../../assets/Bootstrap.png'
import JS from '../../assets/JavaScript.png'
import VS from '../../assets/VisualStudio.png'

const Projects = () => {
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
        <body className='projectsBody'ref={componentRef} style={{ position: "relative" }}>
            {showImage && <img src={golden} alt="HappyGolden" style={{position: "absolute", zIndex: 2, animation: "slideInFromLeft 0.5s forwards"}}/>}   
            <section id='projects'>
                <div className='projectsContent'>
                    <span className='projectsLine1'>Browse My Recent</span>
                    <span className='projectsLine2'>Projetcs</span>
                    <div className='carousel'>
                      <img src={project1} alt='E-Grocery Web App' className='carouselImg' />
                      <div className='carouselDesc'>
                        <h1 style={{color: 'rgb(129, 80, 80)', textAlign: 'center'}}>E-Grocery Web App</h1><br/>
                        <p>If you are a member of the University of San Carlos and Community Multipurpose Cooperative, you can now easily buy your groceries online by using the
                          USC Coop Mart Web Application. It provides an improved Online Ordering system for the members and efficient Inventory Management for the Administrators.
                        </p>
                        <div className='tools'>
                          <img src={CSharp} alt='CSharp' className='toolsImg' />
                          <img src={Dotnet} alt='DotNet' className='toolsImg' />
                          <img src={HTML} alt='HTML' className='toolsImg' />
                          <img src={CSS} alt='CSS' className='toolsImg' />
                          <img src={BS} alt='Bootstrap' className='toolsImg' />
                          <img src={JS} alt='JavaScript' className='toolsImg' />
                          <img src={VS} alt='VisualStudio' className='toolsImg' />
                        </div>
                        <a href='http://usccoopmart-demo.com/'style={{textAlign: 'center'}}><button className='projectBtn'>Check it Out!</button></a>
                      </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default Projects;
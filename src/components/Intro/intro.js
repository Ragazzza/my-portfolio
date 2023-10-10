import React from 'react';
import './intro.css';
import bg from '../../assets/profile_wdog.png';
import TypingText from '../TypingText/typingtText';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello, I'm</span>
                <span className='myName'><TypingText text='Marifran Malinao'/></span> 
                <span className='position'>Computer Engineering Student</span>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    )
}

export default Intro;
import React, { useState, useEffect } from 'react';
import './typingText.css';

function TypingText({ text }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setDisplayText(displayText + text.charAt(index));
        setIndex(index + 1);
      }, 100); // typing speed
    }
  }, [displayText, index, text]);

  return <span>{displayText}<span className="typing-cursor">|</span></span>;
}

export default TypingText;
import React, { useEffect, useState } from 'react';
import divider from './images/pattern-divider-desktop.svg';
import dividerMobile from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';
import axios from 'axios';

const AdivceCard = () => {
    const [advice, setadvice] = useState('');
    const getAdvice = async() => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const advice = await response.data.slip;
        setadvice(advice);
    }
    useEffect(() => {
        getAdvice();
    }, [])
  return (
    <div className='card'>
        <p>ADVICE #{advice.id}</p>
        <h2>"{advice.advice}"</h2>
        <img src={divider} alt="divider" className='divider-desktop' />
        <img src={dividerMobile} alt="divider" className='divider-mobile'/>
        <div className="dice" onClick={getAdvice}>
            <img src={dice} alt="dice" />
        </div>
    </div>
  )
}

export default AdivceCard
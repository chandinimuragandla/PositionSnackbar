import React,{useState} from 'react'
import './App.css'
const Position = () => {
    const[position ,setPosition]= useState({ top: '', bottom: '', left: '', right: '', transform: '' })
    const[message, setMessage]= useState('');
const handlePosition = (pos)=> {
 setPosition(pos);
 setMessage('I Love snacks!');
}
const handleClose = () => {
    setMessage('');
  };
  return (
    
    <div className='Main'>
       
        <div className='border'>
            <button onClick={() => handlePosition({ top: '20px', left: '50%', transform: 'translateX(-50%)' })} >Top-Center</button>
            <button onClick={() => handlePosition({ top: '20px', right: '20px' })}>Top Right</button>
            <button onClick={() => handlePosition({ bottom: '20px', right: '20px' })}>Bottom Right</button>
            <button onClick={() => handlePosition({ bottom: '20px', left: '50%', transform: 'translateX(-50%)' })}>Bottom Center</button>
            <button onClick={() => handlePosition({ bottom: '20px', left: '20px' })}>Bottom left</button>
            <button onClick={() => handlePosition({ top: '20px', left: '20px' })}>Top Left</button>
            
        </div>

        {message && (
        <div className="message-box" style={{ position: 'fixed', zIndex: 1000, ...position }}>
          {message}
          <button onClick={handleClose} style={{ marginLeft: '10px' }}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Position
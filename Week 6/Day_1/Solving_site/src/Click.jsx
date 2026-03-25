import React, { useState } from 'react'

export default function Click() {
      
    const [backgroundColor,setBackgroundColor] = useState('white')
    const handleClick = () => {
        const newColor = backgroundColor ==='white' ? 'lightblue': 'white';
        setBackgroundColor (newColor);
    }


  return (
    <div  onClick={handleClick} style={
        {backgroundColor,
            width:'200px',
            height:'200px',
            cursor:'pointer'
        }
    }>
      Click me to Change color
    </div>
  )
}

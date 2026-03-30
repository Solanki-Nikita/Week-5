import "./ToggleSwitch.css";

import { useState } from "react"

export const ToggleSwitch = () => { 



    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch =  () => {
         setIsOn(!isOn);
    };

    const checkIsOn = isOn ? "On" : "Off";
    const toggleBGColor = {backgroundColor: isOn ? "on" : "off"}
  

    return (
    <div className="toggle-switch"  
    style={toggleBGColor} 
    onClick={handleToggleSwitch}>
    <div className={`switch ${isOn ? "on" : "off"}`} >
        <span className='switch-state'>{checkIsOn}</span>
    </div>
    </div>
    );
};
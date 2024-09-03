
import React from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [input, setInput] = useState({ temperature: 25, conditions: "Sunny" });
  const[textColor,setColor]=useState('blue');
  useEffect(()=>{
      if(input.temperature>20){
       setColor('red')
      }
      else{
       setColor('blue')
      }
   
   
     },[temperature])
  
  return (
    <div >
     <WeatherDisplay weatherObj={input}  textColor={textColor}/>
    </div>
  )
}

export default App

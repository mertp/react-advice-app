import { useState,useEffect } from "react";
import axios from "axios";
import './App.css';
function App() {
  const [advice,setAdvice]=useState(""); 
  useEffect(() => {
    
  }, [advice]);
 
  const fetchAdvice= () =>{
    axios.get('https://api.adviceslip.com/advice').then((response)=>{
      setAdvice(response.data.slip.advice);
      console.log(response.data.slip.advice);
      console.log("buton çalışıyo");
    }).catch((error)=>{
      console.log(error)
    });
  } 
  return (
     <div className="app">
    <div className="card">
      <h1 className="heading">{advice} 🤙🏻</h1>
      <button className="button" onClick={fetchAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  </div>
  );
}

export default App;

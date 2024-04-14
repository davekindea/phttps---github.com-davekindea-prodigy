import React, {useEffect, useState} from 'react'
import "./timer.css"

const Time = () => {
const [Sec,setSec]=useState(0);
const [Min,setMin]=useState(0);
const [Hour,setHour]=useState(0);
const [Isrun,setIsrun]=useState(false)



const TimeInt=1000;
useEffect(()=>{
    if(Isrun){

    
        const timerapp=setInterval(()=>{
            setSec(prevsec=>prevsec+1)
            if (Sec==59){
                setMin(prevMin=>prevMin+1);
                setSec(0)
            }
            if (Min==59){
                setHour(prevHour=>prevHour+1);
                setMin(0)
            }
            if (Hour==24){
                setHour(0)
                setMin(0)
                setSec(0)
            }
    
        },TimeInt)
        return ()=>clearInterval(timerapp)
    }
    })
function resetButton(){
    setHour(0);
    setMin(0)
    setSec(0)
    setIsrun(false)


}
function startButton(){
    setIsrun(true)

}
function stopButton(){
    setIsrun(false)

}

    
  return (
    <div className='timer-page'>
        
        <div className='timer-br'>
            <h1>{Hour<10?"0"+Hour: Hour}:{Min<10? "0"+Min: Min}:{Sec<10? "0"+Sec: Sec}</h1>
        </div >
            
        <div className='buttons'>
        <button className='btn-1' onClick={startButton}>start</button>
            <button className='btn-2' onClick={resetButton}>Reset</button>
            <button className='btn-3' onClick={stopButton}>Stop</button>
        </div>
        <h1 className='time'>timeis <img  src='./img/golod-ring-1040022.jpg'/></h1>
    </div>
  )
}

export default Time

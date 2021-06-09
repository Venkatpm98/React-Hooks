import React,{useState,useEffect} from 'react';

function IntervalHookCounter() {
    const [count,setCount]=useState(0)
    
    const tick=()=>{
        setCount(prevcount=>prevcount+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,10000)
        return()=>{
            clearInterval(interval)
        }
    },[])
    return (
        <div>
           {count} 
        </div>
    );
}

export default IntervalHookCounter;
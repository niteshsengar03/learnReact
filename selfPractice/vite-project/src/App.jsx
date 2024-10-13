import { useState, useEffect } from 'react'

export default function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (running) {
      const clock = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
   
      return function() {
        clearInterval(clock)
      }
    }
  }, [running])
 
  function reset() {
    setTime(0)
    setRunning(false)
  }

  function start() {
    setRunning(true)
  }

  function stop() {
    setRunning(false)
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
    }}>
      <h1 style={{
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
      }}>Stopwatch</h1>
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#444',
        backgroundColor: '#fff',
        padding: '20px 40px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div style={{
        display: 'flex',
        gap: '10px',
      }}>
        {running ? 
          <button onClick={stop} style={{
            fontSize: '1rem',
            padding: '10px 20px',
            backgroundColor: '#ff4757',
            color: 'white',
            borderRadius: '5px',
            border:'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}>Stop</button>
          :
          <button onClick={start} style={{
            fontSize: '1rem',
            padding: '10px 20px',
            backgroundColor: '#2ed573',
            color: 'white',
            border:'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}>Start</button>
        }
        <button onClick={reset} style={{
          fontSize: '1rem',
          padding: '10px 20px',
          backgroundColor: '#5352ed',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}>Reset</button>
      </div>
    </div>
  )
}
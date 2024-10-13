import { useEffect, useState } from "react";

// function App() {
//   const[counterVissible,setCounterVissible]  = useState(false);
//   const [counter, setCounter] = useState(0);
//   useEffect(function(){
//     setInterval(()=>{setCounterVissible(c => !c)},5000)
//   },[])
//   return (
//     <>
//       <h1>Counting</h1>
//       {counterVissible?<Counter counter={counter} setCounter={setCounter} ></Counter>:<h1>Sorry can not show you the counter for 5 sec</h1>}
//     </>
//   );
// }

// function Counter({counter,setCounter}) {
  

//   console.log("counter");

//   useEffect(function(){
//     console.log("this logic runs on mount");
//     let clock = setInterval(function(){
//       console.log("from inside the callback");
      
//       setCounter(function(counter){return counter+1;})// we are using this way because of dependeny array
//     },1000)

//      // Cleanup function to stop the clock when Counter comp is unmounted
//     return function(){
//       console.log("this logic runs on when this is unmounted in this case due to conditional rendering");
//       clearInterval(clock); // logic to stop the clock
//     };
//   },[])
//   return (
//     <>
//       <h1>Counter {counter}</h1>
//     </>
//   );
// }

// Relearning UseEffect, Cleanup,Learning about dependency array
function App(){
  const[count,setCount] = useState(0);
  const[isVissible,setCounterIsVissible] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setCounterIsVissible(vissible => !vissible);
    },5000)
  },[])
  function makeVissible(){
    setCounterIsVissible(!isVissible);
  }

  return (
    <>
      <h1>hii there</h1>
      <br/>
      <button onClick={makeVissible}>vissible</button>
      {isVissible ? <Counter count={count} setCount={setCount}/>:<h1>Clock is unmounted for 5 sec</h1>}
    </>
  )
}

function Counter({count,setCount}){
  useEffect(()=>{
    console.log("mounts");
    let clock = setInterval(()=>{
      setCount(c=>c+1);
    },1000)

    // what happens when Counter is unmounted
    return function(){
      console.log("unmount and clock is stoped");
      //logic to stop the clock
      clearInterval(clock);
  }
  },[])
  return <div>Counter {count}</div>
}

export default App;




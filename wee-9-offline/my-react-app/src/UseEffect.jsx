import { useEffect, useState } from "react";


function UseEffect(){
   const [currentTab,setCurrentTab]=useState(1);
   const [todoData,setTodoData] = useState({});
   const [loading,setLoading] = useState(true);

   useEffect(()=>{
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab).then((response)=>{
        response.json().then((data)=>{
            setTodoData(data);
            //  for(let i=0;i<10000;i++){console.log("hi")}
            setLoading(false);
        })
    })
    
   },[currentTab]) 

    return <div>
        <button onClick={() => setCurrentTab(1)} style={{color:currentTab==1?"red":"black"}}>Todo 1</button>
        <button onClick={() => setCurrentTab(2)} style={{color:currentTab==2?"red":"black"}}>Todo 2</button>
        <button onClick={() => setCurrentTab(3)} style={{color:currentTab==3?"red":"black"}}>Todo 3</button>
        <button onClick={() => setCurrentTab(4)} style ={{ color:currentTab==4?"red":"black"}}>Todo 4</button>
        {loading?<h2>Loading...</h2>:<h1>{todoData.title}</h1>}
    </div>
    
}








export default UseEffect;
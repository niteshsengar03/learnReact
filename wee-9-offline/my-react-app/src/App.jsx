import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {
  //  const [isVissible,setIsVissible] = useState(false);
  // function toggle(){
    // useEffect(()=>{
    //  const clock =  setInterval(()=>{
    //     setIsVissible(vissible =>  !vissible);
        
    //   },5000)
      // return () => {
      //   console.log("clock is cleared when app comp is unmounted")
      //   clearInterval(clock)
      // };
 
    // },[])
    
  // }
  const [posts,setPost] = useState([]);
  const[count,setCounter] = useState(0);
  function addPost(){
      const newPost ={
        name:"Nitesh",
        subtitle: "100 followers",
        time: "2 m ago",
        description: "i am your king",
        image: "https://imgs.search.brave.com/XEmcsNBG7PKq4Ss_UugywTZYMcizfeB2h7R9LdUo2kg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRjLzc3/L2M2LzRjNzdjNjQ2/YzI2YzQzNmJhOWIz/NTM1ODM2M2IyZjMx/LmpwZw"
      }
    setPost([...posts,newPost]);

  }
  function deletPost(){
      let newArray = [...posts];
        newArray.pop();
      setPost(newArray);
  }

 

  return (
    <div>
    <button onClick={addPost}>Add posts</button>
    <button onClick = {deletPost}>Delete Post</button>
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
          {posts.map((p)=>{
           return( <div><PostComponent name = {p.name} subtitle={p.subtitle} time={p.time} description={p.description} image={p.image} /><br/></div>
          )})}
          </div>
          {/* <button onClick={toggle}>Toggle button</button> */}
         
        </div>
      </div>
      {/* {isVissible?<h1>This message from conditional</h1>:<h3>This is also message</h3>} */}
    </div>
         Counter {count}
    </div>
  );
}





export default App;

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
  // posts =[{
  //   name:"Nitesh",
  //   subtitle: "100 followers",
  //   time: "2 m ago",
  //   description: "i am your king",
  //   image: "https://imgs.search.brave.com/XEmcsNBG7PKq4Ss_UugywTZYMcizfeB2h7R9LdUo2kg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRjLzc3/L2M2LzRjNzdjNjQ2/YzI2YzQzNmJhOWIz/NTM1ODM2M2IyZjMx/LmpwZw"
  // }]
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
            {/* <PostComponent
              name={"Nitesh"}
              subtitle={"100 followers"}
              time={"2 m ago"}
              description={"i am your king"}
              image={
                "https://imgs.search.brave.com/XEmcsNBG7PKq4Ss_UugywTZYMcizfeB2h7R9LdUo2kg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRjLzc3/L2M2LzRjNzdjNjQ2/YzI2YzQzNmJhOWIz/NTM1ODM2M2IyZjMx/LmpwZw"
              }
            />
          </div>
          <br />
          <div>
            <PostComponent
              name={"Shauray"}
              subtitle={"Promoted"}
              description={"yes mylord i'm your slave"}
              image={
                "https://imgs.search.brave.com/P0O1wd-7yCN44Id-rH4PGQ--ldqh2RB1lNswIWySu4s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/MjIzMDE0L3Bob3Rv/L3NsYXZlLXdvbWFu/LXByYXlzLXBhc3Np/b25hdGVseS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bV9k/cXVsTjBQYzlKNTl6/MTNLR1N6eTdmclNj/YW1sVmJ3TjBYRTAx/eVNIOD0"
              }
            /> */}
          </div>
          {/* <button onClick={toggle}>Toggle button</button> */}
         
        </div>
      </div>
      {/* {isVissible?<h1>This message from conditional</h1>:<h3>This is also message</h3>} */}
    </div>
    </div>
  );
}





export default App;

function Keys(){
const todos =[{
    id:1,
    title:"Go to gym",
    done:false
},{
    id:2,
    title:"Sts padhle",
    done:true
}];

//In react when you are using list every element should have a unique key

return <div>
    {todos.map((todo) => {
        return <Todos key ={todo.id} title={todo.title} done={todo.done}/>
    })}
    
</div>
}

function Todos({title,done}){
    return <div> 
    {title} - {done?"done!":"not done!"}
    </div>
}
export default Keys;
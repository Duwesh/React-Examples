export const ToDoItem = ({id,status,title,deleteFunc})=>{

    return (
        <div >
               <span> {title} - {status?"Yes":"No"} <button onClick={()=>{
                   deleteFunc(id)
               }}>Delete</button>  </span> 
        </div>
    );
}
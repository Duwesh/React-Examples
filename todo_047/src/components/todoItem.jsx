export const ToDoItem = ({id,status,title})=>{

    return (
        <div id="listShow">
               <span> {title} - {status?"Yes":"No"}   </span> 
        </div>
    );
}
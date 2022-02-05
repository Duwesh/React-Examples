import './list.css'

export const ListShow = ({title,qty,status,id,deleteItem,updateItem})=>{

    return <div>        
        <table id="TableofList">
            <tbody>
                <tr>    
                    <td>{title}</td>
                    <td>{qty}</td>
                    <td>{status?"Buy":"Bought"}</td>
                    <td>
                        <button onClick={()=>{
                            deleteItem(id);
                        }}>Delete</button>
                    </td>
                    <td>
                        <button onClick={()=>{
                            updateItem(id);
                        }}>Change Status</button>
                    </td>
                </tr>
                    
            </tbody>
        </table>
    </div>
}
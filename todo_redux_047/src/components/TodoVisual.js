import { AiFillDelete } from "react-icons/ai";
import {DeleteBtn} from "./TodoButton"

export const TodoVisual = ({title,status,indx})=>{
    return (
        <>
        <tr>
            <td> {indx+1} </td>
            <td> {title}</td>
            <td>{status?"Done":"Not Done"}</td>
            <td>
                <DeleteBtn>
                    <AiFillDelete/>
                </DeleteBtn>
            </td>
        </tr>
        </>
    )
}
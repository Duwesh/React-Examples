import styled from 'styled-components'

export const Table = styled.table`
    border: 1px solid black;
    width: 80%;
    color: black;
    text-align: center;
    font-size: 25px;
    font-weight: 300;
    border-top-left-radius: 15px ;
    border-top-right-radius: 15px ;
    margin-left: 10%;
    margin-top: 5%;

    &>tbody>tr>td{
        /* background-color: ${({count})=>(count%2)==0? "blue":"green"}}; */
        height: 100px;
        padding: 0px 1px; 
    } 

    &>thead>tr{ 
        font-size: 35px;
        font-weight: bold;
        height: 100px;
        background-color: green;
        border: none;
    }

    & > thead > tr:hover , & > tbody > tr:hover {
        /* color: ${({count})=>(count%2)==0? "red":"green"}}; */
    }

    `
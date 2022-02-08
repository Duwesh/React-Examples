import styled from 'styled-components'

export const Table = styled.table`
    width: 80%;
    color: black;
    text-align: center;
    font-size: 35px;
    font-weight: 300;
    margin-left: 10%;
    margin-top: 5%;
   


    &>tbody>tr:nth-child(odd){
        /* background-color: ${({count})=>(count%2)==0? "blue":"green"}}; */
         background-color: #8056f386;
        height: 100px;
        padding: 0px 1px; 
    }
    
    &>tbody>tr:nth-child(even){
        /* background-color: ${({count})=>(count%2)==0? "blue":"green"}}; */
         background-color:#f3f3f3;
        height: 100px;
        padding: 0px 1px; 
        color:blue;
    } 

    &>thead>tr>th:first-child{
        border-top-left-radius: 15px ;
    }
    &>thead>tr>th:last-child{
        border-top-right-radius: 15px ;  
    } 

    &>thead{ 
        font-weight: bold;
        height: 100px;
        background-color: green;
    }

    & > thead > tr:hover , & > tbody > tr:hover {
        /* color: ${({count})=>(count%2)==0? "red":"green"}}; */
        color: red;
        cursor:pointer;
        font-weight: bold;
    }

    `
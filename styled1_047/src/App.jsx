// import logo from './logo.svg';
import './App.css';
// import {Button} from './components/Button'
import {useState,useEffect} from 'react'
import { Table } from './components/Table';
// import {Flex} from './components/Flex'


function App() {
  // const [theme,setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const data=[
    {
      name: "xyz",
      points:10,
      team:"A"
    },{
      name: "123",
      points:8,
      team:"B"
    },
    {
      name: "567",
      points:7,
      team:"C"
    },
  ]
  return (
    <div className="App">

      {/* <Button theme={theme} onClick={()=>{
        console.log("I'm clicked")
      }}>Click ME</Button>
      <br/>
      <br/>
       <button onClick={()=>{
         setTheme(theme=="light"?"Dark":"light")
       }}> Click to Change Theme</button>

       <Flex>
          <div>One One</div>
          <div>One One</div>
          <div>One One</div>
       </Flex> */}

       <Table count={count}>
       <thead>
            <tr>
               <td>Rank</td>
               <td>Name</td>
               <td>Points</td>
               <td>Team</td>
               {/* renk name points team */}
            </tr>
         </thead>
         <tbody>
         {data.map((item, index)=>{
               
              return (
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.points}</td>
                      <td>{item.team}</td>
                    </tr>
              )
         })
         }
     </tbody> 
       </Table>
    </div>
  );
}

export default App;

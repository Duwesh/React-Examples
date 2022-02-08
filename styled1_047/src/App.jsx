// import logo from './logo.svg';
import './App.css';
// import {Button} from './components/Button'
import {useState,useEffect} from 'react'
import { Table } from './components/Table';
// import {Flex} from './components/Flex'


function App() {
  // const [theme,setTheme] = useState("light");
  const [count, setCount] = useState(0); 
  const [data,setData] = useState([])
  let d = [
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
      name: "dfg",
      points:11,
      team:"C"
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

  useEffect(()=>{
    setData([...d.sort((a,b)=>{
      return b.points-a.points
    })])
    },[])

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
               <th>Rank</th>
               <th>Name</th>
               <th>Points</th>
               <th>Team</th>
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

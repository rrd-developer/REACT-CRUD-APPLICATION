
 import  {useState} from "react"
function App() {
  

  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [designation,setDesignation] = useState("")

  const [passenger,setPassenger]  = useState([{id:1,name:"DHINAKAR",designation:"CHENNAI"}]);


  const handleClick = ()=>{
    setPassenger([...passenger,{id:id,name:name,designation:designation}])

    setId("");
    setName("");
    setDesignation("");
  }

const deleteInd = (id)=>{
   setPassenger(passenger.filter(e=>e.id!==id));
}



const del = ()=>{
  setPassenger([]);
}
 
  
  return (
    <div className="App">

      <input type="number" placeholder="ENTER ID" required value={id} onChange={(e)=>setId(e.target.value)}/>
      <input type="text" placeholder="ENTER NAME" required value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="ENTER DESIGNATION" required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
      <button onClick={()=>handleClick}>ADD</button>
      <button onClick={()=>del}>DELETE ALL</button>

      {passenger.map(e=>(
        <div key={e.id}>
          {e.id}  {e.name}  {e.designation}  <button onClick={()=>deleteInd(e.id)}>X</button>
        </div>
      ))}
       
    </div>
  );
}

export default App;

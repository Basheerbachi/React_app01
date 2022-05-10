
import './App.css';
import Functional from './Practice/Functional';
import ClassComponent from './Practice/ClassComponent';
import './Practice/styling.css'
import { useState } from 'react';
function App() {
  const[name1,setName1]=useState(false);
  const[name2,setName2]=useState(false);

    return (
    <div className="App">
      <h1 style={{fontSize:"3vw"}}>Style Using Function and Class Component</h1>
      <div className="hid">
      <header1>  
      <button onClick={()=>{name1?setName1(false):setName1(true)}}>To Style with Functional Component</button>
      {name1&&<Functional />}
      </header1>

      <header2>
      <button onClick={()=>{name2?setName2(false):setName2(true)}} >To Style with Class Component</button>
      {name2&&<ClassComponent />}
      </header2>
      </div>
    </div>
  );
}

export default App;



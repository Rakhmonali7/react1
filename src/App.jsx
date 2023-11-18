import { useState } from "react";

import "./App.css";
import SizeSelector from "./Select";

function App() {
    const [data, setData] = useState([
      {id: 2, name: 'John', surname: 'Doe'}
    ])

    const updateTable = ()=>{
      
    }

  return (
    <div>
      <div className="container">
        <div className="inputCont">
          <input type="text" placeholder="Name..."/>
          <input type="text" placeholder="Surname..." />
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sardor</td>
              <td>Mahkhmudov</td>
              <td><button>Edit</button><button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

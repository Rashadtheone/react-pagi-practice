import data from "./MOCK_DATA.json"
import './App.css';
import React, { useState} from "react"; 
import ReactPaginate from "react-paginate";

function App() {

  //creating state with fake data
  const [users, setUsers] = useState(data.slice(0,30))


  return (
    <div className="App">
      
      {users.map((user)=> {

        return (
          <div className="user">     
              <h3>{user.first_name}</h3>
              <h3>{user.last_name}</h3>
              <h3>{user.email}</h3>
          </div>
        )
      })
      }

    </div>
  );
}

export default App;

import data from "./MOCK_DATA.json"
import './App.css';
import React, { useState} from "react"; 
import ReactPaginate from "react-paginate";

function App() {

  //creating state with fake data
  const [users, setUsers] = useState(data.slice(0,30))
  //creating state to handle page updates
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
    return (
      <div className="user">     
          <h3>{user.first_name}</h3>
          <h3>{user.last_name}</h3>
          <h3>{user.email}</h3>
      </div>
    )
  })

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className="App">
      {/*mapping the data to the page using the map function, using the json data*/}

     {displayUsers}
     <ReactPaginate 
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationbttns"}
      nextLinkClassName={"nextBttn"}
      disabledLinkClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
     />

    </div>
  );
}

export default App;

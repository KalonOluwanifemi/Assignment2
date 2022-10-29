import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./Styles/App.css";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Home from "./Components/Home";
import Error from "./Components/ErrorPage";
import Greetings from "./Components/Greetings";
import ListOfCourses from "./Components/ListOfCourses";
import Layout from "./Components/Layout";
import ErrorBoundaryPage from "./Components/ErrorBoundaryPage";
import Nav from "./Components/Nav";
import ErrorFallback  from "./Components/ErrorFallBack";
import UserList from "./Components/UserList";


function App() {

  const [users, setUsers] = useState([]);

  //implement pagination
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const data = await response.json();
      console.log(data)
      setUsers(data.results);
    }
    fetchData();

  }, []);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }
 
  return (
    <div className="App-container">
      <h1 className="logo">Simple React Lessons</h1>
      <Layout />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Nav />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Courses" element={<Courses />}>
             <Route path="ListOfCourses" element={<ListOfCourses />} />
          </Route>
          <Route path="Greetings" element={<Greetings />}/>
          <Route path="ErrorBoundaryPage" element={<ErrorBoundaryPage />}/>
          <Route path="userlist" element={ <UserList currentUsers={currentUsers} currentPage={currentPage} paginate={paginate} pageNumbers={pageNumbers} users={users} usersPerPage={usersPerPage}
                />
              }
            />
       
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

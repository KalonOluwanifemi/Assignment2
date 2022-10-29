import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";

export default function Nav() {
 
  const navstyle1 = {
    border: "1px solid plum",
    padding: "5px",
    textDecoration: "none",
    color: "purple",
    borderRadius: "2px",
    background: "white",
    boxShadow: "2px 2px 10px grey",
    width:"fit-content",
    margin: '20px auto'
  };

  const navstyle2 = {
    border: "1px solid purple",
    padding: "5px",
    textDecoration: "none",
    color: "purple",
    borderRadius: "2px",
    background: "plum",
  }
  return (
    <div className="navlinks">
      <NavLink style={navstyle1} to="Home">
        Home
      </NavLink>{" "}
      {" "}
      <NavLink
        style={navstyle2}
        to="About"
      >
        About
      </NavLink>{" "}
      {" "}
      <NavLink
        style={navstyle1}
        to="Courses"
      >
        Courses
      </NavLink>{" "}
      {" "}
      <NavLink
        style={navstyle2}
        to="UserList"
      >
        Pagination
      </NavLink>
      {" "}
      <NavLink
        style={navstyle1}
        to="ErrorBoundaryPage"
      >
        ErrorBoundary
      </NavLink>
    </div>
  );
}

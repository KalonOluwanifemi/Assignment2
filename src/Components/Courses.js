// import '../Styles/Courses.css'
import { Link, Outlet } from "react-router-dom"

function Courses () {
    const pl = {margin: '40px auto', color: "white", width: 'fit-content' }
    const ll = {margin: '20px auto', color: "purple", width: 'fit-content', border: "1px solid white", textDecoration: 'none', padding: '5px', backgroundColor: 'white'}
    return(
    <div className='courses'>
        <h4 style={pl}>Click the link below to test for the nested route</h4>
        <div style={ll}>
        <Link to='ListOfCourses' className='linktocourses' >Here</Link>
        </div>
        <div>
        <Outlet/>
        </div>
        
    </div>
    )
}
export default Courses
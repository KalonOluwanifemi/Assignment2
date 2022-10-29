import '../Styles/Home.css'
export default function Home (){
   const liststyle = {color: 'purple', paddin: "10px"}
    return (
        <div>
            <section className='home'>Welcome Home</section>
            <ul className='homepages'>
                <li style={liststyle}>To test the 404 route, Type any route that doesn't exist</li>
                <li style={liststyle}>To test the Nested Routes, Click on Here inside the Courses Link</li>
                <li style={liststyle}>To test the Error boundary page, Click on the Link to Error Boundary</li>
                <li style={liststyle}>To test the Pagination, Click on the Link to Pagination</li>
                <li style={liststyle}>To test the Navigations, Click on any of the Links above</li>
            </ul>
          </div>
    )
};
import '../Styles/About.css'
export default function About(){
    const p = {padding: '3px', color: 'purple', fontSize: '15px', fontWeight: "lighter"}
    const p1 = {padding: "3px", color: 'white', fontWeight: 'lighter'}
    return (
        <div className='aboutContainer'>
            <div>This is just a simple About Page</div>
            <p style={p}>My name is Kalon</p>
            <p style={p1}>This is my first React Page</p>
            <p style={p}>Interesting how much you can achieve if you set your mind to it</p>
            <p style={p1}>The Goal is to always strive to better your best!</p>

        </div>
    )
};
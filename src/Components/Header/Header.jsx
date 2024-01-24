import { Link } from "react-router-dom"


function Header(){
    return(
        <>
     <h1>Hello header</h1>
     <div> <Link to="/">First page</Link></div>
    <div><Link to="/two">Page Two</Link></div>
    <div><Link to="/listAdd">Guest list</Link></div>
    <div><Link to="/stepper">Stepper</Link></div>
    <div><Link to="/UsersListJson">UsersListJson</Link></div>
    <div><Link to="/testFolder">TestFolder</Link></div>
     </>
    )
}

export default Header
import React, { useContext, useRef, } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import SearchContext from '../context/SearchContext'
import Authocontext from '../context/Authocontext'
function Navbar(props) {
   let searchRef=useRef()
   let authstore= useContext(Authocontext)
    let ctx1= useContext(SearchContext)
    let navigate=useNavigate()
    console.log(ctx1)
  const handlechange=(e)=>{
    e.preventDefault()
    
    console.log(searchRef.current.value)
    let ans= searchRef.current.value.toLowerCase()
    ctx1.setsearch(ans)
    }

    const handlecategoryClicked = ()=>{
      ctx1.setcategoryClicked(!ctx1.categoryClicked)
    }
    const handlelogout=()=>{
localStorage.removeItem('login')
 authstore.setuser({email:"",login:false})
 navigate('/login')
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black shadow-lg " >
  <div className="container-fluid ps-3">
    <Link className="navbar-brand text-white" to="/">ShopMart</Link>
    <li style={{listStyle:"none"}} onClick={handlecategoryClicked} className="nav-item">
          <Link  className="nav-link active cc me-2" aria-current="page" to="#">Category</Link>
        </li>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex" role="search">
  <input onChange={handlechange} ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     {authstore.user.login && <li className="nav-item">
        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
      </li>}
      { authstore.user.login &&  <li className="nav-item">
          <Link className="nav-link text-white" to="/cart"> Cart </Link>
        </li>}
       {!authstore.user.login && <li className="nav-item ">
          <Link className="nav-link ps-4 pe-4 bg-dark text-info me-3 rounded-3" to="/signup">Signup</Link>
        </li>}
       {authstore.user.login && <li className="nav-item">
          <Link onClick={handlelogout} className="nav-link ps-4 pe-4 bg-info text-white rounded-3" to="/login">Logout</Link>
        </li>}
      {!authstore.user.login &&  <li className="nav-item">
          <Link className="nav-link  ps-4 pe-4 bg-info text-white rounded-3" to="/login">Login</Link>
        </li>}
     
     
    
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
// import App from './App.css'
// import MovieView from './component/MovieView.jsx'
// import Counter from './component/Counter.jsx'
// import Character from './component/Character.jsx'
// import Moviedetails from './component/Moviesdetails.jsx'
//import ApiCallone from './component/ApiCallone'
//import Lifecycle from './component/lifecycle'
// import Lifecycle from './component/Lifecycle'
import Userform from './component/Userform'
import React, { useState } from 'react'
import logo from './assets/logo.jpg'
import Home from './component/Movies Hub/Home'
import Movies from './component/Movies Hub/Movies'
import Contact from './component/Movies Hub/Contact'
import About from './component/Movies Hub/About'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {


  // const[islog,setislog]=useState(true)

  // const handlelogout = () =>{
  //     setislog(false)
  // }

  return (
    <BrowserRouter>
      {/* <h1>Luffy</h1>
      <h2>Sanji</h2> */}


      {/* <App />

      <MovieView /> */}
      {/* <Counter />  */}
      {/* <Character />
       <Moviedetails /> */}
      {/* <ApiCallone />  */}
      {/* <Lifecycle /> */}
      {/* {islog?<Lifecycle />:"u need login"} */}
      {/* <Userform /> */}


      {/* <button onClick = {handlelogout}>logout</button> */}
      <div className='navbar'>
        <div className='left'>
          <img className="logo" src={logo} />
          <h1 className='heading'>Movies Hub</h1>
        </div>
        <div className='search'>
          <input type='text' placeholder="Search here"/>
        </div>
        <div className='right'>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </div>
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />


      </Routes>





    </BrowserRouter>
  )
}
export default App
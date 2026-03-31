// import App from './App.css'
// import MovieView from './component/MovieView.jsx'
// import Counter from './component/Counter.jsx'
// import Character from './component/Character.jsx'
// import Moviedetails from './component/Moviesdetails.jsx'
 //import ApiCallone from './component/ApiCallone'
import Lifecycle from './component/lifecycle'
// import Lifecycle from './component/Lifecycle'
import React,{useState} from 'react'

function App(){


  const[islog,setislog]=useState(true)

  const handlelogout = () =>{
      setislog(false)
  }

  return(
    <div>
      {/* <h1>Luffy</h1>
      <h2>Sanji</h2> */}


         {/* <App />

      <MovieView /> */}
      {/* <Counter />  */}
      {/* <Character />
       <Moviedetails /> */}
       {/* <ApiCallone />  */}
      {/* <Lifecycle /> */}
      {islog?<Lifecycle />:"u need login"}


      <button onClick = {handlelogout}>logout</button>
      

      
    </div>
  )
}
export default App
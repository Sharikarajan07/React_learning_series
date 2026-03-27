import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieView from './component/MovieView.jsx'
import Counter from './component/Counter.jsx'
import Character from './component/Character.jsx'
import Moviedetails from './component/Moviesdetails.jsx'
import ApiCallone from './component/ApiCallone'

createRoot(document.getElementById('root')).render(
  <>
    <App />

    <MovieView />
    <Counter /> 
    <Character />
    <Moviedetails />
    <ApiCallone />
  </>
)

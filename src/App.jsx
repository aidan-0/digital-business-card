import { React } from 'react'
import CardFooter from './components/CardFooter'
import CardBody from './components/CardBody'
import Headshot from './components/Headshot'
import './App.css'

function App() {
  return (
    <div className='card-container'>
      <Headshot />
      <CardBody />
      <CardFooter />
    </div>
  )
}

export default App

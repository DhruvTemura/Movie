import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  return(
    <div className='card'>
      <h2>{title}</h2>
    </div>
    
  )
}


const App = () => {

  const [hasLiked, setHasLiked] = useState()

  return(
    <div className='card-container'>
      <Card title='dead reckoning'/>
      <Card title='conjuring 4'/>
      <Card title='final destination'/>
    </div>
  )
}

export default App

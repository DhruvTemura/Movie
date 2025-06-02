import { useEffect, useState } from 'react'
import './App.css'

const Card = ({title}) => {

  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log('hi');
  }, [hasLiked]);

  return(
    <div className='card' onClick={() => setCount(count + 1)}>
      <h2>{title} <br /> {count}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '👍'}
      </button>
    </div>
    
  )
}


const App = () => {

  

  return(
    <div className='card-container'>
      <Card title='dead reckoning'/>
      <Card title='conjuring 4'/>
      <Card title='final destination'/>
    </div>
  )
}

export default App

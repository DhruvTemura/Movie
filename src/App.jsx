import './App.css'

const Card = ({title}) => {
  return(
    <p>{title}</p>
  )
}


const App = () => {
  return(
    <>
      <h2>Dhruv Temura</h2>
      <Card title='dead reckoning'/>
      <Card title='conjuring 4'/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  return (
    <div>
      <Header />
      
      <Button onClick={() => setGood(good + 1)  } text ={"Good Coffe"} /> 
      <Button onClick={() => setBad(bad + 1) } text ={"Bad Coffe"} /> 
      <Button onClick={() => setNeutral(neutral + 1) } text ={"Meh Coffe"} /> 

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

const Statistics = ({good, bad, neutral}) => {

  if(good+bad+neutral === 0){
    return(
      <>
        <StatisticsHeader />
        No feedback given
      </>
    )
  }
  
  return (
    <>
    <StatisticsHeader />
    <table>
      <tbody>
        <Stat statTitle={"Good coffes"} quantity={good} />
        <Stat statTitle={"Bad coffes"} quantity={bad}  />
        <Stat statTitle={"Meh coffes"} quantity={neutral} />
        <Stat statTitle={"Total Coffees"} quantity={good+bad+neutral} /> 
        <Stat statTitle={"Average Coffees"} quantity={getAverage(good,bad,neutral)} /> 
        <Stat statTitle={"Positive Coffees"} quantity={getPositives(good,bad,neutral)} /> 
      </tbody>
    </table>
    </>
  )

}

const getAverage = (good, bad, neutral) => {
  if(good+bad+neutral===0) return 0;

  return (good - bad)/(good+bad+neutral)
}

const getPositives = (good, bad, neutral) => {
  if(good+bad+neutral===0) return "0%";

  return (good*100)/(good+bad+neutral) + "%"
}

const Header = () => (
  <div>
    <h1>Giving feedback!</h1>

  </div>

)

const StatisticsHeader = () => {

  return (
    <div>
      <h1>Statistics!</h1>
    </div>
  )
}

const Stat = ({statTitle, quantity}) => {
  return (
  <tr>
    <td>{statTitle} served: {quantity}</td>
  </tr>)
}

const Button = ({text, onClick}) => (
  <>
    <button onClick={onClick}>
      {text}
    </button>
  </>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
)
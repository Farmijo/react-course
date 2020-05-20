import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const votesNew = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(votesNew)

  const changeAnecdote = () => setSelected(getRandomInt(0, anecdotes.length - 1))

  const voteAnecdote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    console.log(votes)
    setVotes(votesCopy);
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <div>
        Has {votes[selected]} votes
      
      </div>
      <Button onClick={changeAnecdote} text={"Change anecdote"} />
      <Button onClick={voteAnecdote} text={"Vote anecdote "} />

      <div>
        Anecdote with more votes has {Math.max(...votes).toString()} votes. 
        Max votes are from: {props.anecdotes[Math.max(...votes)]}
      </div>  

    </div>
    
  )
}




const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}


const Button = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
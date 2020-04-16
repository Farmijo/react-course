import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
    <>
      <h1>{props.course}</h1>
    </>
)

const Content = (props) => {
  const arrayParts = new Array();

  props.parts.map(part => {

    arrayParts.push(<Part part={part}/>)
  
  })
  return arrayParts

}

const Part = (props) => {
  return (
    <>
        <p>
           {props.part.name} {props.part.exercises}
        </p>
    </>
    )
}



const Total = (props) => {

  let totalSum= 0;
  props.parts.map(part => {
    totalSum = part.exercises + totalSum
  })

  return(<>
    <p>Number of exercises {totalSum}</p>
  </>)

}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react';
import { Router } from '@reach/router';
import './App.css';

const ColorizeWord = (props) => {
  if(isNaN(props.word)) 
  return (
    <div style={{ color: props.fontColor, backgroundColor: props.bgColor }}>
      <h1>This is the word: {props.word}</h1>
    </div>
  )
}

const Four = (props) => {

  if(isNaN(props.id)) {
    return (<h1>This is the word: {props.id}</h1>)
  } else {
    return (<h1>This is the number {props.id}</h1>)
  }
}

const Home = () => {

  return (
    <div>
      <h1>Welcome Folks!</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Four path="/:id" />
        <ColorizeWord path="/:word/:fontColor/" />
        <ColorizeWord path="/:word/:fontColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;

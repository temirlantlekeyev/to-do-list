import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Button from './button'
import Todo from './to-do';

const list = ["Eat breakfast", "Read a book", "Go to the gym"]

function App() {
  

  return (
   <>
   <Todo list={list}/>
   </> 
  )
}

export default App

import trash from "./assets/trash.png"
import ReactDOM from 'react-dom'
import { useState } from "react";
import "./App.css"


const Todo = (props) => {

    const [tasks, setTasks] = useState(props.list)
    const [newTasks, setNewTasks] = useState("")

    console.log(props)

    function handleDisplay(e) {
        setNewTasks(e.target.value)
    }

    function toDoListsItem(e) {
        console.log(e.target. __reactFiber$yeal4c14qa.index)
    }

    function addButton(e) {
        console.log("click")
        if(newTasks.trim() !== "") {
            setTasks((todo)=> [...todo, newTasks])
            setNewTasks("")
        }
        
    }
    
    console.log(tasks)

    function deleteBtn(index) {
        const update = tasks.filter((element, i)=> i !== index)
        setTasks(update)
    }

    return(
        
        <div className="font-outfit flex flex-col items-center min-h-screen text-white bg-indigo-950">

        <h1 className="text-5xl text-center mt-20">To-Do-List</h1>
        <div className="m-10 flex ">
            <input value={newTasks} onChange={(e)=> handleDisplay(e)} placeholder="Enter your task " className="text-black text-xl text-center border-solid border-orange-700 border-2 rounded-xl h-12 w-96 focus:outline-none p-8 pr-20 pl-20" type='text'/>
            <button onClick={addButton} className=" ml-4 text-3xl border-solid rounded-xl bg-green-600 hover:bg-green-700 px-6 py-3">Add</button>
        </div>

        <div className=" rounded-2xl w-auto px-24 py-7">
            <ul className="flex flex-col text-4xl"> 
                {tasks.map((tasks, index)=> {
                     return  <li onClick={(e)=> toDoListsItem(e)} className="flex justify-between mb-5 border-solid border-white border-2 rounded-2xl bg-white text-black px-24 py-4 cursor-pointer" key={index}>{tasks} <img onClick={()=> deleteBtn(index)} className="w-10 ml-5 rounded-lg cursor-pointer bg-red-300 hover:bg-red-800" src={trash}/></li>
                }     
                )}
            </ul>
        </div>
        
    </div>

    )
}

export default Todo
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
        <div className="font-outfit flex flex-col items-center min-h-screen text-white bg-indigo-950 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-4xl sm:text-5xl text-center mt-20 sm:mt-20">To-Do-List</h1>
        <div className="m-6 flex flex-col sm:flex-row items-center">
            <input value={newTasks} onChange={(e)=> handleDisplay(e)} placeholder="Enter your task " className="text-black text-lg sm:text-xl text-center border-solid border-orange-700 border-2 rounded-xl h-10 sm:h-12 w-full sm:w-96 focus:outline-none p-4 sm:p-8" type='text'/>
            <button onClick={addButton} className=" mt-4 sm:mt-0 sm:ml-4 text-xl sm:text-2xl md:text-3xl border-solid rounded-xl bg-green-600 hover:bg-green-700 px-6 py-3">Add</button>
        </div>

        <div className=" rounded-2xl w-full sm:w-auto px-4 sm:px-10 py-7">
            <ul className="flex flex-col text-xl sm:text-2xl md:text-4xl"> 
                {tasks.map((tasks, index)=> {
                     return  <li onClick={(e)=> toDoListsItem(e)} className="flex justify-between mb-5 border-solid border-white border-2 rounded-2xl  bg-white text-black px-4 sm:px-8 md:px-24 py-4 cursor-pointer" key={index}>{tasks}  
                                <img onClick={()=> deleteBtn(index)} className="w-8 sm:w-10 ml-4 rounded-lg cursor-pointer bg-red-300 hover:bg-red-800" src={trash}/>
                            </li>
                }     
                )}
            </ul>
        </div>
    </div>

    )
}

export default Todo
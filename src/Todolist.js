import './todo.css';
import {useState} from "react";


function Todolist() {

  
  const [todoArray,setTodoArray] = useState([]);

  const [curretTodo,setCurretTodo] = useState({
    task_name : '',
    task_status : '',
  })

  function addTodo(){
    setTodoArray([...todoArray,curretTodo]);
    setCurretTodo({
      task_name : '',
      task_status : '',
    });
    console.log(todoArray);                       
  }

  function changeHandler(e){
    setCurretTodo(function(prev){
      return{
        ...prev,
        [e.target.name] : e.target.value
      }
    })
    console.log("change handler called :",e.target.name, e.target.value );
  }

  return (
    <div>
      <div className="total">
        <h1 className="top">Create To Do</h1>

        <div className="todo">
          <div>
            <input type=" text" name="task_name" placeholder="Enter your task" className="task" onChange={changeHandler}  value={curretTodo.task_name} ></input>
          </div>

          <select name="task_status" id="" className="taskStatus"  value={curretTodo.task_status} onChange={changeHandler} >
            <option value="To-Do">To-Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Done">Done</option>
          </select>

          <button onClick={addTodo} className="btn">Add Task</button>
        </div>

        <h1 className="top">Added to do List</h1>


        <div className="list">
           {todoArray.map((todo,index)=>{
 return <div>
             <div>
               {todo.task_name}
             </div>
             <div>
               {todo.task_status}
             </div>
          </div>
           })}
        </div>
        <hr className='hr'></hr>
      </div>
    </div>
);
}

export default Todolist;
import { useReducer, useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

export default function TaskApp() {
  const [tasks,dispatch] = useReducer(taskReducer,initialTasks)

  function handleAddTask(text) {
    dispatch({
      type: 'newTask',
      id: nextId++,
      text: text,
      done: false
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'updateTask',
      task: task
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleteTask',
      id: taskId
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
function taskReducer(tasks,action){
  if(action.type=="newTask"){
    return [
      ...tasks,
      {
        id:action.id,
        text: action.text,
        done: action.done
      }]
  } else if(action.type=="updateTask"){
    let tasksUpdated = []
    tasks.forEach(task => {
      if(task.id == action.task.id){
        tasksUpdated.push(action.task)
      } else {
        tasksUpdated.push(task)
      }
    });
    return tasksUpdated;    
  } else if(action.type=="deleteTask"){
    let tasksUpdated = [];
    tasks.forEach(task=>{
      if(task.id != action.id){
        tasksUpdated.push(task)
      }
    })
    return tasksUpdated;
  }
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

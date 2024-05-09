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
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
  }

  function handleDeleteTask(taskId) {
    // setTasks(tasks.filter((t) => t.id !== taskId));
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
  }
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

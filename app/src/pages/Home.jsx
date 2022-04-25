import React, { useState } from 'react';
import '../Styles/Bloco.css';
import Tasks from '../components/Tasks.jsx';
import AddTasks from '../components/AddTasks';
import { v4 as uuidv4 } from "uuid";
import Header from '../components/Header';

function Bloco() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programacao',
      completed: false,
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true,
    },
  ]);

  const handleTaskAddition=(taskTitle)=>{
    const newTask = [...tasks,{
      title:taskTitle,
      id:uuidv4(),
      completed:false,
    }];
    setTasks(newTask);
  }

 
	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});
		setTasks(newTasks);
	};
  
  const handleTaskRemove = (taskId) => {
    const newTask = tasks.filter(task=>task.id!== taskId)
    setTasks(newTask);
  }


  return (
    <div className="container">
      <Header/>
      <AddTasks handleTaskAddition={handleTaskAddition} />
      <Tasks 
      tasks={tasks} 
      handleTaskClick={handleTaskClick} 
      handleTaskRemove={handleTaskRemove}/>
    </div>
  );
}

export default Bloco;

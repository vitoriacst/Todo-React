import React, { useState } from 'react';
import './Styles/Home.css'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks';
import { v4 as uuidv4 } from "uuid";
import Header from '../src/components/Header';
import TasksDetails from './components/TasksDetails.jsx';
import { BrowserRouter as Router , Route } from "react-router-dom";
// -> refatorar o app , mudar as func de lugar
const App=()=> {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar ',
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
				<Router>
          <Header/>
          <Route path="/" exact render={() => (
						<>
							<AddTasks handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskRemove={handleTaskRemove}
							/>
						</>
					)}
          />
          <Route path="/:taskTitle" exact component={TasksDetails} />
          </Router>
			</div>
  )
}

export default App;

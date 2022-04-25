import React from 'react';
import '../Styles/Task.css';
import {CgClose,CgInfo} from 'react-icons/cg'
import { useHistory } from "react-router-dom";


const TaskItem = ({tasks,handleTaskClick,handleTaskRemove}) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
		history.push(`/${tasks.title}`);
	};

  return (
    <div className='tasks-container' 
       style={tasks.completed ? { borderLeft: "6px solid blue" } : {}}
		>
      <div className='task-title' onClick={()=> handleTaskClick(tasks.id)}>
        {tasks.title}
      </div>
      <div className='buttons-container'>
          <button className='remove-task-button'
           onClick={()=>handleTaskRemove(tasks.id)}>
             <CgClose/>
             </button>
          <button className='see-task-button' onClick={handleTaskDetailsClick}>
            <CgInfo/>
          </button>
      </div>
    </div>
     
  );
}

export default TaskItem;

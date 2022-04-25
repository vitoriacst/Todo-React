import React from 'react';
import '../Styles/Task.css';
import {CgClose,CgInfo} from 'react-icons/cg'

const TaskItem = ({tasks,handleTaskClick,handleTaskRemove}) => {
  return (
    <div className='tasks-container' 
       style={tasks.completed ? { borderLeft: "6px solid blue" } : {}}
		>
      <div className='task-title' onClick={()=> handleTaskClick(tasks.id)}>
        {tasks.title}
      </div>
      <div className='buttons-container'>
          <button className='remove-task-button' onClick={()=>handleTaskRemove(tasks.id)}><CgClose/></button>
          <button className='see-task-button'><CgInfo/></button>
      </div>
    </div>
     
  );
}

export default TaskItem;

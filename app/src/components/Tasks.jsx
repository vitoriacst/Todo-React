import React from 'react';
import TaskItem from './TaskItem.jsx';
import '../Styles/Task.css'

function Tasks({ tasks , handleTaskClick, handleTaskRemove }) {
  return (
    <>
      {
      tasks.map((tasks) => <TaskItem tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>)
    }
    </>
  );
}
export default Tasks;

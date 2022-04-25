import React, { useState } from 'react';
import '../Styles/AddTask.css'
import ButtonAdd from './ButtonAdd.jsx';

const AddTasks = ({handleTaskAddition}) => {
    const[inputData,setInputData]=useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }
    return (  
        <div className='add-tasks-container'>
            <input type="text"
                onChange={handleInputChange} 
                value={inputData}
                className='add-tasks-input'/>
            <div className='add-tasks-button-container'>
                <ButtonAdd onClick={handleAddTaskClick}>Adicionar</ButtonAdd>
            </div>
        </div>
    );
}
 
export default AddTasks;
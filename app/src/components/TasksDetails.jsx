import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonAdd from './ButtonAdd';

const TasksDetails = () => {
    const params = useParams()
    return ( 
        <>
            <div className='back-button-container'>
                <ButtonAdd>Voltar</ButtonAdd>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Sed elementum tempus egestas sed sed risus pretium quam. Aliquam etiam erat velit scelerisque in. 
                </p>
            </div>
        </>
     );
}
 
export default TasksDetails;
import React from 'react';
import { useParams } from 'react-router';
import ButtonAdd from './ButtonAdd';
import '../Styles/TasksDetails.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const TasksDetails = () => {
    const params = useParams()
    const history=useHistory()
    const handleBackButtonClick=()=>{
        history.goBack()
    }
    return ( 
        <>
            <div className='back-button-container'>
                <ButtonAdd onClick={handleBackButtonClick}>Voltar</ButtonAdd>
            </div>
            <div className="tasks-details-container">
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
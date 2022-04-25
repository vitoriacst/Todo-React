import React from 'react';
import '../Styles/Button.css'

const ButtonAdd = ({children,onClick}) => {
    return (  
        <button 
            type='button' 
            className='add-tasks-button'
            onClick={onClick}>
                {children}
        </button>
    );
}
 
export default ButtonAdd;
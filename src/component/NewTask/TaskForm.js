import React from 'react';
import classes from './TaskForm.module.css';
// import Section from '../UI/Section';
const TaskForm = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
    return (
        <form className={classes.form }onSubmit={onSubmitHandler}>
            <input type='text' />
            <button>Add Task</button>
      </form>
            
    )
 };
export default TaskForm
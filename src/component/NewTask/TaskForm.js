import React,{useRef} from 'react';
import classes from './TaskForm.module.css';
// import Section from '../UI/Section';
const TaskForm = props => {
    const taskInputRef = useRef();
    

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current.value;

        if (enteredValue.trim().length > 0) {
            props.onEnterTask(enteredValue);
        }
    }
    
    return (
        <form className={classes.form }onSubmit={onSubmitHandler}>
            <input type='text' ref={taskInputRef} />
            <button >{props.loading?'Sending..':'Add Task' }</button>
      </form>
            
    )
 };
export default TaskForm
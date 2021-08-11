import React from 'react';
import classes from './Tasks.module.css'
import Section from '../UI/Section';
import TaskItem from '../Tasks/TaskItem';

const Tasks = props => {
    let taskList = <h2>No task found.Start adding some task!</h2>;
    
    if (props.items.length > 0) {
        taskList = (
          <ul>
            {props.items.map((task) => (
              <TaskItem key={task.id}>{task.text}</TaskItem>
            ))}
          </ul>
        );
      }
    let content = taskList;
    return (
        <Section>
            <div className={classes.container}>{content }</div>
        </Section>
    )
    
 };
export default Tasks;
import classes from './Tasks.module.css';
import TaskItem from './TaskItem';
import Section from '../UI/Section';

const Tasks = props => {
    let taskList = <h2>No task found.Start adding task</h2>

    if (props.items.length > 0) {
        taskList = (
            <ul>
                {props.items.map((task) => (
                    <TaskItem key={task.id}> {task.text}</TaskItem>
                ))}
            </ul>
        );
    }
    let content = taskList;
    
    return (
        <Section>
              <div className={classes.container}>{content}</div>
        </Section>
    )
};
export default Tasks;
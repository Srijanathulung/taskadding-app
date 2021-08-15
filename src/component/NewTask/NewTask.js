import React,{useState} from 'react';
import TaskForm from './TaskForm.js';
import Section from '../UI/Section.js';


const NewTask = props => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const enterTaskHandler =async (taskText) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://realistic-example-7ef6f-default-rtdb.firebaseio.com/tasks.json',
                {
                    method: 'POST',
                    body: JSON.stringify({ text: taskText }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const data = await response.json();

            const generatedId = data.name; // firebase-specific => "name" contains generated id
            const createdTask = { id: generatedId, text: taskText };
            props.onAddTask(createdTask)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };
    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error&&<p>error</p>}
        </Section>
    )
 };
export default NewTask;
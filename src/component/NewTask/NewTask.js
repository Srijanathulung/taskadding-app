import React,{useState} from 'react';
import TaskForm from './TaskForm.js';
import Section from '../UI/Section.js';
import useHttp from '../../hook/use-http.js';


const NewTask = props => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
    
    const createTask = (taskText,taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        props.onAddTask(createdTask);

    };

    const enterTaskHandler = async (taskText) => {
        sendTaskRequest(
            {
            url: 'https://realistic-example-7ef6f-default-rtdb.firebaseio.com/tasks.json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { text: taskText }
        },
            //function that takes the response data and does something with it
            //in custom hook response data is taking only one argument so we are using bind()
            createTask.bind(null,taskText)
        );
    };
    
    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error&&<p>error</p>}
        </Section>
    )
 };
export default NewTask;
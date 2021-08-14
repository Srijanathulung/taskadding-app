import React,{useEffect, useState} from 'react';
import Tasks from './component/Tasks/Tasks';
import NewTask from './component/NewTask/NewTask';


function App() {

  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(tasks);
  
  const fetchTasks = async (taskText) => {
    setIsLoading(false);
    setError(null);

    try {
      const response = await fetch('https://realistic-example-7ef6f-default-rtdb.firebaseio.com/tasks.json');

      if (!response.ok) {
        throw new Error('Request failed')
      }
      const data = await response.json();
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text })
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onAddTaskHandler = (task) => {
    console.log('onAddTask function is called succesfully');
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>

      <NewTask onAddTask={onAddTaskHandler }/>
      <Tasks
        items={tasks}
        error={error}
        onFetch={fetchTasks}
        loading={isLoading}
      />
      
    </React.Fragment>
  );
}

export default App;

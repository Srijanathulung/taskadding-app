import React,{useEffect, useState} from 'react';
import Tasks from './component/Tasks/Tasks';
import NewTask from './component/NewTask/NewTask';


function App() {

  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  
  const fetchTasks = async (taskText) => {
    try {
      const response = await fetch('https://realistic-example-7ef6f-default-rtdb.firebaseio.com/tasks.json');

      if (!response.ok) {
      throw new Error('Request failed')
      }
      const data = await response.json();
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({id:taskKey, text:data[taskKey].text})
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  const taskAddHandler = () => {
    setTasks((prevTasks) => prevTasks.concat(tasks));
  }

  return (
    <React.Fragment>

      <NewTask onAddtask={taskAddHandler} />
      <Tasks
        items={tasks}
        error={error}
        onFetch={fetchTasks}
      />
      
    </React.Fragment>
  );
}

export default App;

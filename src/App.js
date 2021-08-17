import React,{useEffect, useState,useCallback} from 'react';
import Tasks from './component/Tasks/Tasks';
import NewTask from './component/NewTask/NewTask';
import useHttp from './hook/use-http';


function App() {

  const [tasks, setTasks] = useState([]);
  // console.log(tasks);

 
  
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];
  
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url: 'https://realistic-example-7ef6f-default-rtdb.firebaseio.com/tasks.json' },
      transformTasks);
  }, [fetchTasks]);

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

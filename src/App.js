import React,{useState} from 'react';
import Tasks from './component/Tasks/Tasks';
import NewTask from './component/NewTask/NewTask';


function App() {

  const [tasks, setTasks] = useState([])
  console.log(tasks);
  
  return (
    <React.Fragment>

      <NewTask />
      <Tasks
        items={tasks}
      />
      
    </React.Fragment>
  );
}

export default App;

// import './App.css';
import React,{useState} from 'react';
import NewTask from './component/NewTask/NewTask';
import Tasks from './component/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
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

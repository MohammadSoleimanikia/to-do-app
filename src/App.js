
import './App.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';

function App() {
  return (
    <div className="App" >
      
      <Header text="To Do App" />
      <NewTask/>
      <TaskContainer>
        <Task/>
      </TaskContainer>
    
    </div>
  );
}

export default App;

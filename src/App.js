import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Todo 1"/>
      <Todo text="Todo 2"/>
      <Todo text="Todo 3"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

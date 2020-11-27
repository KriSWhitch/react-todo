import React from 'react';
import ToDoList from './todo/ToDoList';
import Context from './context'
import AddToDo from './todo/AddToDo'

function App() {

  const [toDos, setToDos] = React.useState(
    [
      {id: 1, completed: false, title: 'купить хлеб'},
      {id: 2, completed: false, title: 'купить масло'},
      {id: 3, completed: false, title: 'купить молоко'},
    ]
  );

  function toggleTodo(id) {
    setToDos(toDos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  function removeTodo(id) {
    setToDos(toDos.filter(todo => todo.id !== id))
  }

  function addToDo(title) {
    setToDos(toDos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
  <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>React tutorial</h1>
      <AddToDo onCreate={addToDo}/>
      {
        toDos.length ? <ToDoList toDos={toDos} onToggle={toggleTodo}/> :
        <p>No todos!</p>
      }
      
    </div>
  </Context.Provider>
  );
  
}

export default App;

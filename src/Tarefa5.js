import React, { useState } from 'react';

function mergeArrays(array1, array2) {
    const merged = {};
  
    array1.forEach(item => {
      merged[item.id] = { ...item };
    });
  
    array2.forEach(item => {
      merged[item.id] = { ...merged[item.id], ...item };
    });
  
    return Object.values(merged);
  }
  
  const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];
  
  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];
  
  const result = mergeArrays(array1, array2);
  console.log(result);
  
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  const addTask = () => {
    if (taskName) {
      setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
      setTaskName('');
    }
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => showCompleted || !task.completed);

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Mostrar Apenas Não Concluídas' : 'Mostrar Todas'}
      </button>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? 'Marcar como Não Concluída' : 'Marcar como Concluída'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Tarefa5 = () => (
  <div>
    <h1>Tarefa 5 - Mesclar Arrays de Objetos</h1>
    <TaskList />
  </div>
);

export default Tarefa5;

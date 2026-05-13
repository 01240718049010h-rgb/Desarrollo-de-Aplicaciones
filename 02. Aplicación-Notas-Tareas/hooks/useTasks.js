import { useState } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Aprender useState', done: false },
    { id: '2', text: 'Construir esta app',  done: false },
  ]);

  // Agrega una tarea nueva al arreglo
  const addTask = (text) => {
    if (!text.trim()) return; // No agregar si está vacío
    const newTask = {
      id: Date.now().toString(), // ID único con timestamp
      text: text.trim(),
      done: false,
    };
    setTasks(prev => [...prev, newTask]); // Spread: copia el array y agrega
  };

  // Cambia done de true a false o viceversa
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>           // map: recorre cada tarea
        task.id === id
          ? { ...task, done: !task.done } // esta tarea: cambia done
          : task                          // las demás: sin cambios
      )
    );
  };

  // Filtra fuera la tarea con ese id
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Estadísticas derivadas del estado (no necesitan useState propio)
  const pendingCount = tasks.filter(t => !t.done).length;

  return { tasks, addTask, toggleTask, deleteTask, pendingCount };
}
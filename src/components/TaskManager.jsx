import React, { useState, useEffect } from "react";
import "../styles/TaskManager.css";  // Import external CSS

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: "", priority: "Medium", completed: false, canceled: false });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.title.trim()) return;
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", description: "", dueDate: "", priority: "Medium", completed: false, canceled: false });
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const cancelTask = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, canceled: true } : task)));
  };
  
  const isOverdue = (task) => {
    return !task.completed && new Date(task.dueDate) < new Date();
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase()));

  const upcomingTasks = filteredTasks.filter(task => !task.completed && !isOverdue(task))
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate) || 
    (a.priority === "High" ? -1 : b.priority === "High" ? 1 : a.priority === "Medium" ? -1 : 1));

  const completedTasks = filteredTasks.filter(task => task.completed);
  const overdueTasks = filteredTasks.filter(task => isOverdue(task));

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <input type="text" placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" />
      
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <div className="task-panel">
          <h2>Upcoming Tasks</h2>
          {upcomingTasks.map(task => (
            <div key={task.id} className="task-item">
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate} | Priority: {task.priority}</p>
              </div>
              <div>
                <button onClick={() => updateTask(task.id, { ...task, completed: true })} className="task-btn complete-btn">Complete</button>
                <button onClick={() => cancelTask(task.id)} className="task-btn cancel-btn">Cancel</button>
                {/* <button onClick={() => deleteTask(task.id)} className="task-btn delete-btn">Delete</button> */}
              </div>
            </div>
          ))}
        </div>
        
        <div className="task-panel">
          <h2>Completed & Overdue Tasks</h2>
          <div className="task-panel-sub">
            <h3 style={{ color: "green" }}>Completed Tasks</h3>
            {completedTasks.map(task => (
              <div key={task.id} className="task-item">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
          <div className="task-panel-sub">
            <h3 style={{ color: "orange" }}>Overdue Tasks</h3>
            {overdueTasks.map(task => (
              <div key={task.id} className="task-item">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="task-form">
        <h2>Add Task</h2>
        <input type="text" placeholder="Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} className="task-input" />
        <textarea placeholder="Description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} className="task-input"></textarea>
        <input type="date" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} className="task-input" />
        <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })} className="task-input">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask} className="task-submit">Add Task</button>
      </div>
    </div>
  );
};

export default TaskManager;

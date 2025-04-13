import { TaskManager } from './task.js';
import { renderTaskList } from './dom.js';

const taskInput = document.getElementById('taskInput');
const taskListEl = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');

const manager = new TaskManager();

const refresh = () => {
  renderTaskList(manager.getTasks(), taskListEl, handleEdit, handleDelete);
};

const handleAdd = () => {
  const value = taskInput.value.trim();
  if (value !== '') {
    manager.addTask(value);
    taskInput.value = '';
    refresh();
  }
};

const handleEdit = (index) => {
  const old = manager.getTasks()[index];
  const updated = prompt('Edit Task:', old);
  if (updated && updated.trim() !== '') {
    manager.editTask(index, updated.trim());
    refresh();
  }
};

const handleDelete = (index) => {
  manager.deleteTask(index);
  refresh();
};

addBtn.addEventListener('click', handleAdd);

refresh();

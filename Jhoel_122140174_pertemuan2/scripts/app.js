// scripts/app.js
import { TaskManager } from './modules/taskManager.js';
import { renderTaskList } from './dom/renderTask.js';
import { addScheduleItem, renderSchedule, clearAllSchedules } from './modules/schedule.js';
import { startDateTimeUpdater, startGreetingUpdater } from './modules/dateTime.js';

const taskInput = document.getElementById('taskInput');
const taskListEl = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const scheduleInput = document.getElementById('scheduleInput');
const addScheduleBtn = document.getElementById('addScheduleBtn');
const clearScheduleBtn = document.getElementById('clearScheduleBtn');
const manager = new TaskManager();

const refresh = () => {
  renderTaskList(manager.getTasks(), taskListEl, handleEdit, handleDelete, handleToggleDone);
};

const getSelectedLabel = () => {
  const selected = document.querySelector('input[name="label"]:checked');
  return selected ? selected.value : 'default';
};


const handleAdd = () => {
  const value = taskInput.value.trim();
  const label = getSelectedLabel();
  if (value) {
    manager.addTask(value, label);
    taskInput.value = '';
    document.querySelectorAll('input[name="label"]').forEach(r => r.checked = false);
    refresh();
  }
};


const handleEdit = (index) => {
  const old = manager.getTasks()[index];
  const updated = prompt('Edit Task:', old);
  if (updated?.trim()) {
    manager.editTask(index, updated.trim());
    refresh();
  }
};

const handleToggleDone = (index) => {
  manager.toggleDone(index);
  refresh();
};

const handleDelete = (index) => {
  manager.deleteTask(index);
  refresh();
};

const addSchedule = () => {
  const value = scheduleInput.value.trim();
  const result = addScheduleItem(value);
  if (!result.success) {
    alert(result.message);
    return;
  }
  renderSchedule();
  scheduleInput.value = '';
};

clearScheduleBtn.addEventListener('click', () => {
  if (confirm('Yakin mau menghapus semua jadwal?')) {
    clearAllSchedules();
    renderSchedule();
  }
});

addBtn.addEventListener('click', handleAdd);
addScheduleBtn.addEventListener('click', addSchedule);

refresh();
renderSchedule();
startDateTimeUpdater();
startGreetingUpdater('User');


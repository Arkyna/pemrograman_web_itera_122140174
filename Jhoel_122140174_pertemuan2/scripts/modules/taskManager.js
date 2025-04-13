export class TaskManager {
  constructor(storageKey = 'tasks') {
    this.storageKey = storageKey;
    this.tasks = JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }

  addTask(taskText, label = 'default') {
    const task = {
      text: taskText,
      timestamp: new Date().toISOString(),
      done: false,
      label
    };
    this.tasks.push(task);
    this._commit();
  }
  
  
  editTask(index, newTaskText) {
    const task = this.tasks[index];
    this.tasks[index] = {
      ...task,
      text: newTaskText,
      timestamp: new Date().toISOString()
    };
    this._commit();
  }

  toggleDone(index) {
    this.tasks[index].done = !this.tasks[index].done;
    this._commit();
  }  

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this._commit();
  }

  getTasks() {
    return this.tasks;
  }

  _commit() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }
}

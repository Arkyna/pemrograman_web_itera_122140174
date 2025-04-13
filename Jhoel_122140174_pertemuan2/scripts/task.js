export class TaskManager {
    constructor(storageKey = 'tasks') {
      this.storageKey = storageKey;
      this.tasks = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this._commit();
    }
  
    editTask(index, newTask) {
      this.tasks[index] = newTask;
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
  
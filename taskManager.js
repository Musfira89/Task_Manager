class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  

  
    getTaskById(taskId) {
      return this.tasks.find(task => task.id === taskId);
    }
  
    updateTaskStatus(taskId, status) {
      const task = this.getTaskById(taskId);
      if (task) {
        task.status = status;
      }
    }
  

  }
  
  export default TaskManager;
  
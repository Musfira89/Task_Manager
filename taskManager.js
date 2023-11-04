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
    getAllTask(){
      return this.task;
    }
  

  
    getTaskById(taskId) {
      return this.tasks.find(task => task.id === taskId);
    }
  
    prioritizeTask(taskId) {
      const task = this.getTaskById(taskId);
      if (task) {
        task.priority = true;
      }
    }
    updateTaskStatus(taskId, status) {
      const task = this.getTaskById(taskId);
      if (task) {
        task.status = status;
      }
    }
  

  }
  
  export default TaskManager;
  
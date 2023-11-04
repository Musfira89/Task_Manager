class Task {
    constructor(id, title, description, status, priority = false) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
    }
  }
  
  export default Task;
  
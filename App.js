import readline from 'readline';
import TaskManager from './taskManager.js';
import Task from './task.js';
import chalk from 'chalk';

// Create a new TaskManager and a Readline interface for user input
const taskManager = new TaskManager();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the main menu
function displayMenu() {
  console.log(chalk.bold.blue('Task Manager'));
  console.log(chalk.yellow('1. Add Task'));
  console.log(chalk.yellow('2. Update Task Status'));
  console.log(chalk.yellow('3. Delete Task'));
  console.log(chalk.yellow('4. Prioritize Task'));
  console.log(chalk.yellow('5. View All Tasks'));
  console.log(chalk.yellow('6. Exit'));
}

// Function to add a new task
function addTask() {
  rl.question(chalk.cyan('Enter task title: '), title => {
    rl.question(chalk.cyan('Enter task description: '), description => {
      const task = new Task(
        taskManager.tasks.length + 1,
        title,
        description,
        'Pending'
      );
      taskManager.addTask(task);
      console.log(chalk.green('Task added successfully! Task ID: ' + task.id));
      displayMenu();
      processInput();
    });
  });
}

// Function to update the status of a task
function updateTaskStatus() {
  rl.question(chalk.cyan('Enter task ID: '), taskId => {
    rl.question(chalk.cyan('Enter new status (Pending/Completed): '), status => {
      taskManager.updateTaskStatus(parseInt(taskId), status);
      console.log(chalk.green('Task status updated successfully!'));
      displayMenu();
      processInput();
    });
  });
}

// Function to delete a task
function deleteTask() {
  rl.question(chalk.cyan('Enter task ID: '), taskId => {
    taskManager.deleteTask(parseInt(taskId));
    console.log(chalk.green('Task deleted successfully!'));
    displayMenu();
    processInput();
  });
}

// Function to prioritize a task
function prioritizeTask() {
  rl.question(chalk.cyan('Enter task ID: '), taskId => {
    taskManager.prioritizeTask(parseInt(taskId));
    console.log(chalk.green('Task prioritized successfully!'));
    displayMenu();
    processInput();
  });
}

// Function to view all tasks
function viewAllTasks() {
  const tasks = taskManager.getAllTasks();
  console.log(chalk.bold.yellow('All Tasks:'));
  tasks.forEach(task => {
    console.log(chalk.cyan('ID: ' + task.id));
    console.log(chalk.cyan('Title: ' + task.title));
    console.log(chalk.cyan('Description: ' + task.description));
    console.log(chalk.cyan('Status: ' + task.status));
    console.log(chalk.yellow('------------------------'));
  });
  displayMenu();
  processInput();
}

// Function to process user input and make menu choices
function processInput() {
  rl.question(chalk.cyan('Enter your choice: '), choice => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        updateTaskStatus();
        break;
      case '3':
        deleteTask();
        break;
      case '4':
        prioritizeTask();
        break;
      case '5':
        viewAllTask();
        break;
      case '6':
        rl.close();
        break;
      default:
        console.log(chalk.red('Invalid choice. Please try again.'));
        displayMenu();
        processInput();
        break;
    }
  });
}

// Start by displaying the menu and processing user input
displayMenu();
processInput();

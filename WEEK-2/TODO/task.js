import {
  validateDueDate,
  validatePriority,
  validateTitle,
} from "./validator.js";

const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
  // Validate using imported functions
  // If valid, add to tasks array
  // Return success/error message
  if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
    const task = {
      id: tasks.length + 1,
      title:title,
      priority:priority,
      dueDate:dueDate,
      completed: false,
    };
    tasks.push(task);
    return "Task added successfully";
  }
}

// 2. Get all tasks
function getAllTasks() {
  // Return all tasks
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  // Find task and mark as complete
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = true;
    return "Task marked as complete";
  }  return "Task not found";
}

// Export functions
export { addTask, getAllTasks, completeTask };

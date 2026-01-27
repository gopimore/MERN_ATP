// TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
console.log(addTask("Buy groceries", "High", "2026-06-10"));
console.log(addTask("Walk the dog", "Medium", "2026-06-11"));
console.log(addTask("Read a book", "Low", "2026-06-12"));
// 2. Display all tasks
console.log("All Tasks:", getAllTasks());
// 3. Complete a task
console.log(completeTask(2)); // Mark task with ID 2 as complete
// 4. Display all tasks again
console.log("All Tasks after completion:", getAllTasks());

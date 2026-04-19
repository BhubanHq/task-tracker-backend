const { loadTasks, saveTasks } = require("../utils/fileServices");

function addTask(description) {
  const tasks = loadTasks();

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks(tasks);

  return newTask;
}

function listTasks(filter) {
  const tasks = loadTasks();

  if (filter) {
    return tasks.filter((t) => t.status === filter);
  }

  return tasks;
}

function updateTask(id, description) {
  const tasks = loadTasks();

  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return null;

  task.description = description;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);
  return task;
}

function deleteTask(id) {
  const tasks = loadTasks();

  const filtered = tasks.filter((t) => t.id !== Number(id));

  if (filtered.length === tasks.length) return false;

  saveTasks(filtered);
  return true;
}

function markTask(id, status) {
  const tasks = loadTasks();

  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return null;

  task.status = status;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);
  return task;
}

module.exports = {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markTask,
};

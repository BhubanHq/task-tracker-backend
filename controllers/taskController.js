const service = require("../services/taskService");

function handleAdd(input) {
  if (!input) {
    console.log("Description required");
    return;
  }

  const task = service.addTask(input);
  console.log("Task added:", task);
}

function handleList(filter) {
  const tasks = service.listTasks(filter);

  if (tasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  tasks.forEach((t) => {
    console.log(`${t.id}. ${t.description} [${t.status}]`);
  });
}

function handleUpdate(id, desc) {
  const task = service.updateTask(id, desc);

  if (!task) {
    console.log("Task not found");
    return;
  }

  console.log("Updated:", task);
}

function handleDelete(id) {
  const ok = service.deleteTask(id);

  if (!ok) {
    console.log("Task not found");
    return;
  }

  console.log("Task deleted");
}

function handleMark(id, status) {
  const task = service.markTask(id, status);

  if (!task) {
    console.log("Task not found");
    return;
  }

  console.log(`Marked as ${status}`);
}

module.exports = {
  handleAdd,
  handleList,
  handleUpdate,
  handleDelete,
  handleMark,
};

const fs = require("fs");

const FILE = "tasks.json";

function loadTasks() {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, "[]");
  }

  return JSON.parse(fs.readFileSync(FILE));
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

module.exports = {
  loadTasks,
  saveTasks,
};

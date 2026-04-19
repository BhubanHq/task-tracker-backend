#!/usr/bin/env node

const controller = require("./controllers/taskController");

const args = process.argv.slice(2);

const command = args[0];

switch (command) {
  case "add":
    controller.handleAdd(args[1]);
    break;

  case "list":
    controller.handleList(args[1]);
    break;

  case "update":
    controller.handleUpdate(args[1], args[2]);
    break;

  case "delete":
    controller.handleDelete(args[1]);
    break;

  case "mark-in-progress":
    controller.handleMark(args[1], "in-progress");
    break;

  case "mark-done":
    controller.handleMark(args[1], "done");
    break;

  default:
    console.log("Unknown command");
}

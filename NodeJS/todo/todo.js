import { readFileSync, writeFileSync } from 'fs';
const filePath = "./tasks.json";

// Load tasks
const loadTask = () => {
    try {
        const dataBuffer = readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

// Save tasks
const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks, null, 2);
    writeFileSync(filePath, dataJSON);
};

// Add a task
const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({ task });
    saveTasks(tasks);
    console.log("Task Added:", task);
};

// List tasks
const listTasks = () => {
    const tasks = loadTask();
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1} - ${task.task}`);
        });
    }
};

// Remove task
const removeTasks = (index) => {
    const tasks = loadTask();
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task number.");
        return;
    }
    const removed = tasks.splice(index - 1, 1);
    saveTasks(tasks);
    console.log("Removed Task:", removed[0].task);
};

// Command handler
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    if (!argument) {
        console.log("Please provide a task.");
    } else {
        addTask(argument);
    }
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    if (!argument || isNaN(argument)) {
        console.log("Please provide a valid task number to remove.");
    } else {
        removeTasks(parseInt(argument));
    }
} else {
    console.log("Command not found!");
}

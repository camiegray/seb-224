


/*------------------------------- Starter Code -------------------------------*/

import "dotenv/config";
import mongoose from "mongoose";
import Todo from "./models/todo.js"




const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};
// queries.js

const createTodo = async () => {

    const todoData = {
      text: "Order of Ops",
      isComplete: true,
    };
    
    const todo = await Todo.create(todoData);
    console.log("New todo:", todo);
  };
  // queries.js

const findTodos = async () => {
    const todos = await Todo.find({});
    console.log("All todos:", todos);
  };
  // queries.js

const updateTodo = async () => {
    const id ='67ddb1a802f1c7761c616977';
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { isComplete: false },
      { new: false }
    );
    console.log("Updated todo:", updatedTodo);
  };
  
const runQueries = async () => {
  console.log('Queries running.')
//   await createTodo();
  await findTodos()
  await updateTodo()
  await createSubtask()
  // The functions calls to run queries in our db will go here as we write them.
};
const createSubtask = async () => {
  // Assume that the todo we want to create a
  // sub-task for has the following id:
  const todoId = "67ddaca299d588d53bfa96e5";
  // Look up the todo by id, assign the returned object to `todo`
  const todo = await Todo.findById(todoId);

  const subtaskData = {
    text: "Learn how props work",
    isComplete: false,
  };

  // Push the new sub-task data into the subtasks array on the todo:
  const subtask = todo.subtasks.push(subtaskData);
  // Save the parent document:
  await todo.save();
  console.log("Modified todo:", todo);
};


connect()
/*------------------------------ Query Functions -----------------------------*/

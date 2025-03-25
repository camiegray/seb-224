import "dotenv/config";
import mongoose from "mongoose";
import promptSync from "prompt-sync";
import Customer from "./model/customer.js";

const prompt = promptSync({ sigint: true });

const displayMenu = () => {
  return prompt(`
Welcome to the CRM

What would you like to do?
  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. Quit

Number of action to run: `);
};

const createCustomer = async () => {
  console.log("\nCreating a customer");
  const name = prompt("Enter customer name: ");
  const age = prompt("Enter customer age: ");
  const newCustomer = await Customer.create({ name, age: Number(age) });
  console.log(`Customer created: id: ${newCustomer._id} -- Name: ${newCustomer.name}, Age: ${newCustomer.age}`);
};

const viewCustomers = async () => {
  console.log("\nViewing customers");
  const customers = await Customer.find();
  if (customers.length === 0) {
    console.log("No customers found.");
  } else {
    customers.forEach(customer => {
      console.log(`id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`);
    });
  }
};

const updateCustomer = async () => {
  console.log("\nUpdating a customer");
  const customers = await Customer.find();
  if (customers.length === 0) {
    console.log("No customers to update.");
    return;
  }
  console.log("\nBelow is a list of customers:");
  customers.forEach(customer => {
    console.log(`id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`);
  });
  const id = prompt("Copy and paste the id of the customer you would like to update here: ");
  const customerToUpdate = await Customer.findById(id.trim());
  if (!customerToUpdate) {
    console.log("Customer not found.");
    return;
  }
  const newName = prompt("What is the customer's new name? ");
  const newAge = prompt("What is the customer's new age? ");
  customerToUpdate.name = newName;
  customerToUpdate.age = Number(newAge);
  await customerToUpdate.save();
  console.log("Customer updated successfully.");
};

const deleteCustomer = async () => {
  console.log("\nDeleting a customer");
  const customers = await Customer.find();
  if (customers.length === 0) {
    console.log("No customers to delete.");
    return;
  }
  console.log("\nBelow is a list of customers:");
  customers.forEach(customer => {
    console.log(`id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`);
  });
  const id = prompt("Copy and paste the id of the customer you would like to delete here: ");
  const deletedCustomer = await Customer.findByIdAndDelete(id.trim());
  if (deletedCustomer) {
    console.log("Customer deleted successfully.");
  } else {
    console.log("Customer not found.");
  }
};

const runQueries = async () => {
  let exit = false;
  while (!exit) {
    const choice = displayMenu();
    switch (choice.trim()) {
      case "1":
        await createCustomer();
        break;
      case "2":
        await viewCustomers();
        break;
      case "3":
        await updateCustomer();
        break;
      case "4":
        await deleteCustomer();
        break;
      case "5":
        console.log("\nExiting the Application");
        exit = true;
        break;
      default:
        console.log("\nInvalid choice. Please enter a number between 1 and 5.");
    }
    if (!exit) {
      console.log("\nChoosing next action");
    }
  }
};

const startApp = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
  await runQueries();
  await mongoose.connection.close();
  console.log("Disconnected from MongoDB");
  process.exit();
};

startApp();

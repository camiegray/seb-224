print("Hello, World!")

name = "John"
age = 25

print(name, age)

# Lists
fruits = ["apple", "banana", "cherry"]
print(fruits)

# Dictionaries
person = {
    "name": "John",
    "age": 25,
    "city": "New York"
}
print(person)

# Tuples
coordinates = (1, 2, 3)
print(coordinates)

# Sets
unique_numbers = {1, 2, 3, 4, 5}
print(unique_numbers)

# Functions
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# Loops
for i in range(5):
    print(i)

# Conditionals
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# File Handling
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# Exception Handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Division by zero")

# Classes
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, {self.name}!"

person = Person("Alice", 30)
print(person.greet())

# Inheritance
class Employee(Person):
    def __init__(self, name, age, salary):
        super().__init__(name, age)
        self.salary = salary

employee = Employee("Bob", 35, 50000)
print(employee.greet())

# Modules
import math
print(math.pi)

# Decorators
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello() 

# Lambda Functions
square = lambda x: x * x
print(square(5))

# List Comprehensions
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x * x for x in numbers]
print(squared_numbers)

# Dictionary Comprehensions
squares = {x: x * x for x in range(6)}
print(squares)

# Generator Expressions
squares_gen = (x * x for x in range(6))
print(list(squares_gen))

# Decorators
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()

    
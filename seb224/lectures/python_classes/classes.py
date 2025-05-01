class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')

class Cat():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def meow(self):
        print(f'{self.name} says meow!')

class Mouse():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def squeak(self):
        print(f'{self.name} says squeak!')

class Bird():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def chirp(self):
        print(f'{self.name} says chirp!')

class vehicle():
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.running = False
    def start(self):
        self.running = True
        print("Starting up!")
        
    def stop(self):
        self.running = False
        print("Turning off.")
        
    def __str__(self):
        return f"The vehicle is a {self.make} {self.model}."
        
        
car = vehicle("Toyota", "RAV4")

print(car)
# prints: The vehicle is a Toyota RAV4.

print(car.running) 
# prints: False

car.start()
# prints: Starting up!

print(car.running) 
# prints: True



def do_something():
    print("Doing something")

do_something()


def sum(*args):
    print(type(args))
    # prints: <class 'tuple'>

    total = 0
    for arg in args:
        total += arg

    return total

print(sum(1, 5, 10))
# prints: 16
def sum(greeting, *args):
    print(greeting)
    # prints: Hello, friend

    total = 0
    for arg in args:
        total += arg

    return total

print(sum("Hello, friend", 1, 5, 10))
# prints:
# Hello, friend
# 16
def make_employee(role, **kwargs):
    username = ""
    for name in kwargs.values():
        username += name

    employee = {"role": role, "username": username}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))

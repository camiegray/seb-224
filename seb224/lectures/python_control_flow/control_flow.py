# floor = "sticky"
# walls = "clean"

# # notice the colon ':' after the conditional expression
# # it indicates the start of the if block
# if floor == "sticky":
#     print("Clean the floor! It's sticky!")
#     # this is where you would add more lines of code related to the condition
#     # each line must be indented to be part of the 'if' block

# # unindented code indicates that we have returned to normal code execution
# print("This will always print, it's not inside of an if block!")

# # parentheses are not required around the conditional expression
# if walls == "sticky":
#     print("Clean the walls! They're sticky!")
    
# val = 3

# # if path
# if val == 1:
#     print('val is one')
# # else path
# else:
#     print('val is not one')
#     # prints: val is not one
#     # since val is not 1, the else path is taken
# color = input('Enter "green", "yellow", "red": ').lower()
# print(f'The user entered {color}')
# color = ""
# while not color == "quit":
#     color = input("enter green, yellow, or red: ")
#     if color == "green":
#         print("go")
#     elif color == "yellow":
#         print("slow down")
#     elif color == "red":
#         print("stop")


color = ""
while color != "quit":
    color = input("Enter a color (or 'quit' to exit): ")
    if color == "quit":
        break
    print(f'The user entered {color}')
    if color == "green":
        print("Go")
    elif color == "yellow":
        print("Slow down")
    elif color == "red":
        print("Stop")
    else:
        print("Bogus!")
        
        time_of_day = 9
morning = True if time_of_day < 12 else False
print(morning)
# prints: True

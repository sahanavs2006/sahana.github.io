function showCode() {
  const exampleCode = `
# Function
def greet(name):
    return "Hello, " + name

print(greet("Python Learner"))

# If-Else Condition
age = 20
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")

# For Loop
for i in range(3):
    print("For Loop Count:", i)

# While Loop
count = 0
while count < 3:
    print("While Loop Count:", count)
    count += 1

# List
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("Fruit:", fruit)

# Dictionary
student = {"name": "Alice", "age": 21, "course": "Python"}
print("Student Name:", student["name"])

# Simple Class
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print("Hi, I'm", self.name)

p = Person("Bob")
p.say_hello()
  `;
  document.getElementById("codeDisplay").textContent = exampleCode;
}

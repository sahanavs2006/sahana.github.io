function showCode() {
  const exampleCode = `
# Example function
def greet(name):
    return "Hello, " + name

print(greet("Python Learner"))
  `;
  document.getElementById("codeDisplay").textContent = exampleCode;
}
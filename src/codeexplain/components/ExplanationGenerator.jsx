export function generateExplanation(analysis, code) {
  const steps = [];

  // Ensure analysis object has default values to avoid errors
  const {
    loops = [],
    conditionals = [],
    assignments = [],
    functions = [],
    variables = []
  } = analysis || {};

  // Step 1: Identify the overall structure with detailed explanation
  steps.push({
    title: "Function Structure Overview",
    content: `This function's structure consists of:
- ${loops.length} loops (${loops.length > 0 ? 'sections of code that repeat multiple times' : 'no repeating code sections'})
- ${conditionals.length} conditional statements (${conditionals.length > 0 ? 'decision points where the code chooses different paths' : 'no decision points'})
- ${assignments.length} assignments (${assignments.length > 0 ? 'places where values are stored in variables' : 'no value storage operations'})
- ${functions.length} nested functions (${functions.length > 0 ? 'smaller functions defined inside this function' : 'no internal function definitions'})
- ${variables.length} variable declarations (${variables.length > 0 ? 'containers created to store data' : 'no data containers'})`
  });

  // Step 2: Explain variable declarations in detail
  if (variables.length > 0) {
    steps.push({
      title: "Variable Declarations Explained",
      content: `This function creates ${variables.length} variables, which are like labeled containers for storing data.

Variables are fundamental building blocks in programming that allow the code to store, track, and manipulate information during execution. Each variable acts as a named container that holds a specific piece of data, which can be changed or referenced throughout the function.

The presence of ${variables.length} variable${variables.length > 1 ? 's' : ''} suggests this function needs to keep track of multiple pieces of information as it runs.`
    });
  }

  // Step 3: Explain loops in detail
  if (loops.length > 0) {
    steps.push({
      title: "Loops Explained",
      content: `This function contains ${loops.length} loop${loops.length > 1 ? 's' : ''}, which ${loops.length > 1 ? 'are sections' : 'is a section'} of code that repeat multiple times.

Loops are powerful structures that allow the same block of code to run multiple times, either:
- A fixed number of times (for loops)
- Until a certain condition is met (while loops)
- For each item in a collection (for...of, for...in loops)

The presence of ${loops.length} loop${loops.length > 1 ? 's' : ''} indicates this function likely processes collections of data or performs repetitive tasks efficiently.`
    });
  }

  // Step 4: Explain conditionals in detail
  if (conditionals.length > 0) {
    steps.push({
      title: "Conditional Logic Explained",
      content: `This function contains ${conditionals.length} conditional statement${conditionals.length > 1 ? 's' : ''}, which ${conditionals.length > 1 ? 'are decision points' : 'is a decision point'} where the code chooses different paths.

Conditionals (like if/else statements) allow the function to make decisions based on certain conditions:
- They evaluate an expression to determine if it's true or false
- Based on the result, they execute different blocks of code
- This creates branching paths in the program's execution

The presence of ${conditionals.length} conditional${conditionals.length > 1 ? 's' : ''} shows this function has decision-making logic that adapts its behavior based on different situations or inputs.`
    });
  }

  // Step 5: Explain assignments in detail
  if (assignments.length > 0) {
    steps.push({
      title: "Assignments Explained",
      content: `This function contains ${assignments.length} assignment${assignments.length > 1 ? 's' : ''}, which ${assignments.length > 1 ? 'are operations' : 'is an operation'} where values are stored in variables.

Assignments are fundamental to programming as they allow the code to store results of calculations, user inputs, or other data into variables for later use.`
    });
  }

  return steps;
}

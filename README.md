# Name of your project:

DevStack

# Description:

A simple Web app where user can view various web development technologies,
and add them to a sidebar, remove them individually or remove all.

# Technology that has been used:

React with TypeScript, Tailwind Css

# 3 features about my project:

- Web App is repsonsive.
- React toastify is used to show beutiful notifications.
- Project is created in simple and cleaner manner so modification can be quite easily again.

#### Some answers to questions

1. What is JSX, and why is it used in React?

- JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript, making it easier to create and structure React components.

2. What is the difference between props and state?

- Props are used to pass data from a parent component to a child component. State is used to manage data inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

- The useState hook allows us to manage changing data in a component. I used it to manage the selected technologies in the stack and enable or disable the Add to Stack buttons.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

- The useEffect hook allows us to perform side effects in React, such as fetching data from an API or JSON file. It can be used to load the technology data when the component first renders.

5. Why does every item in a .map() list need a unique key prop?

- A unique key helps React identify each item in a list. It allows React to efficiently track changes when items are added, removed, or updated.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

- Conditional rendering means displaying different content based on a condition. I used it to show an empty stack message when no technologies are selected and display the selected technologies when the stack is not empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- We pass data from parent to child using props. To send data back, the parent passes a callback function as a prop, which the child can call with the required data.

# Report  
**Week 5 | b10902007, b10902017, b10902041**

## Introduction  

This week, we focused on practicing static JavaScript syntax and planned to transition into TypeScript for implementing higher-level object-oriented programming (OOP) features in our weekly project.  

Our project is a simple browser-based **To-Do List web application**. The key feature of this app is a **login system** that ensures personalized access to each user's to-do list. Upon logging in, the **username and password are hashed** into a string, which is then used to match and retrieve a corresponding JSON file in the browser that stores the user's to-do list.  

Users can add new to-do items via a form that includes basic input validation. This structure sets a solid foundation for scalable feature additions in the future.  

---

## TypeScript  

We learned TypeScript through resources like Google, W3Schools, and generative AI tools. Our OOP approach is influenced by prior experience with C# in game development projects.

### Setup  

1. Make sure you have Node.js installed, along with the TypeScript compiler and ts-node package.  
2. Compile the TypeScript file using:  
   ```bash
   tsc script.ts
   ```  
3. Open `index.html` in your browser to try out the application.  

---

## index.html  

The `index.html` file defines the layout and elements of the webpage, including:  

- A login form with username and password input fields  
- A section to display the user’s to-do list after successful login  
- A form for adding new to-do items  
- Basic UI structure to show tasks and their status  

---

## script.ts  

The `script.ts` file includes the main logic for:  

- Hashing the login credentials using a simple hash function  
- Validating login and matching the hashed key with saved user data  
- Handling the addition of new to-do items  
- Managing the to-do list in memory or via local storage (if implemented)  
- Type-safe DOM manipulation and form input validation using TypeScript  

---

## style.css  

The stylesheet was generated with the help of GPT. It enhances the visual appeal of the page, applying hover effects and basic styles to buttons, input fields, and the to-do list entries to ensure a clean and interactive user interface.  

## Report.md

Write it by ourselves, but overall correction by gpt.
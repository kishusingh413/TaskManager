## Technical Questions and their Answers

### How long did you spend on the coding test? 

**Answer:** It took me around 5 hours to complete the task, along with some extra time to fix the alignment.

---

### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

**Answer:** The Task Manager project is built using React and JavaScript. One of the most useful features added in the latest versions of JavaScript (ES2020+) is the optional chaining (`?.`) operator.

In our project, we used optional chaining to safely access task properties when updating or displaying data.

#### Example: Handling Task Due Date Safely
```javascript
const isOverdue = (task) => !task?.completed && new Date(task?.dueDate) < new Date();
```
---

### How would you track down a performance issue in production? Have you ever had to do this?

**Answer:** I would analyze each API and check their performance. Additionally, I would inspect database queries and indexing to ensure efficient functioning. In previous projects, I optimized performance by using `await` to process multiple requests in parallel. Often, rendering inefficiencies slow down applications, so I would implement lazy loading to fetch only essential data initially and load the rest in the background, thereby enhancing overall performance.

---

### If you had more time, what additional features or improvements would you consider adding to the task management application?

**Answer:** Given more time, I would implement a feature that tracks all tasks and applies an algorithm to analyze efficiency by monitoring completed versus overdue tasks. This feature would help users assess their productivity and identify areas for improvement.

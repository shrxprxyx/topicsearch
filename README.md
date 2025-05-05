# TopicSearch - React Topic Filtering Component

"TopicSearch" is a React component that displays a searchable list of topics. Users can filter topics in real-time based on their names, with clean UI and responsive feedback.

---

## Project Objectives

- Create a search bar to filter an in-memory list of topics.
- Display results in a card format.
- Provide instant feedback with case-insensitive search.
- Show "No topics found" when the search yields no results.

---

### Project Structure

topicsearch/              
|--public/                
|   |-- index.html       
|-- src/                   
|   |-- components/      
|   |  |-- TopicSearch.jsx
|   |  |-- TopicSearch.css
|   |-- App.jsx           
|   |-- index.css          
|   |-- index.js          
|-- .gitignore            
|-- package.json          
|-- README.md              

## Step-by-Step Workflow

### Step 1: Define the Data

We define a static in-memory array of topics:

for example:

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Organic Chemistry", category: "Chemistry" },
  { id: 3, name: "Calculus", category: "Mathematics" },
  { id: 4, name: "Quantum Mechanics", category: "Physics" },
  { id: 5, name: "Genetics", category: "Biology" }
];

### Step 2: Create Search Input

Add an <input> field in the component. Use useState to track searchTerm.

### Step 3: Implement Filtering Logic

Use .filter() to return topics whose names include the typed input:

const filteredTopics = topicsData.filter(topic =>
  topic.name.toLowerCase().includes(searchTerm.toLowerCase())
);

### Step 4: Display UI

Map over filteredTopics to render topic cards. If the array is empty, display:

<div className="no-results">No topics found</div>

### Step 5: Add Styling

Add styling to your TopicSearch file 

### Step 6: Integrate with App

In App.jsx, import and render TopicSearch

### GITHUB REPOSITORY

https://github.com/shrxprxyx/topicsearch

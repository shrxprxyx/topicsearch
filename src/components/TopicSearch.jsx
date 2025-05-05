import React, { useState } from "react";
import "./TopicSearch.css";  


const topics = [
  { title: "Operating Systems", category: "Computer Science" },
  { title: "Polymers", category: "Chemistry" },
  { title: "Probability", category: "Mathematics" },
  { title: "Thermodynamics", category: "Physics" },
];

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Topic Search</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="topic-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic, index) => (
            <div key={index} className="topic-card">
              <strong>{topic.title}</strong>
              <div>{topic.category}</div>
            </div>
          ))
        ) : (
          <div className="no-results">No matching topics found.</div>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;


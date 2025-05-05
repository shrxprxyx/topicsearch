import React, { useState } from "react";
import "./TopicSearch.css";

const topicsData = [
  { id: 1, name: "Operating Systems ", category: "Computer Science" },
  { id: 2, name: "Polymers", category: "Chemistry" },
  { id: 3, name: "Probability", category: "Mathematics" },
  { id: 4, name: "Thermodynamics", category: "Physics" },
  { id: 5, name: "Genetics", category: "Biology" }
];

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Topic Search</h2>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="topic-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No topics found</p>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;

import React from "react";
import NewsItem from "./NewsItem";

function NewsList({ articles }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "10px" }}>
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;

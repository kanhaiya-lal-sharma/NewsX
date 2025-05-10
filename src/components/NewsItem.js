import React from "react";

function NewsItem({ article }) {
  const { title, description, urlToImage, url, source } = article;

  return (
    <div style={{
      width: "220px",
      border: "1px solid gray",
      borderRadius: "10px",
      overflow: "hidden",
      backgroundColor: "#fff"
    }}>
      <img
        src={urlToImage || "https://via.placeholder.com/300x180.png?text=No+Image"}
        alt={title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "16px" , color:"blue" }}>{title}</h3>
        <p style={{ fontSize: "14px" ,color:"black"}}>{description?.slice(0, 100)}...</p>
        <p style={{color:"black"}}><strong>Source:</strong> {source.name}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsItem;

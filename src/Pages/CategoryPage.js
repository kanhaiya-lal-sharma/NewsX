import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";

function CategoryPage({ darkMode }) {
  const { category } = useParams(); 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "51dcc11449dd4e9790ba243ffc5e0957"; 

  useEffect(() => {
    async function fetchCategoryNews() {
      setLoading(true);
      try {
        const response = await fetch(
          
          `https://newsapi.org/v2/everything?q=${category}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setArticles(data.articles);
        
      } catch (error) {
        console.error("Error fetching category news:", error);
      }
      setLoading(false);
    }

    fetchCategoryNews();
  }, [category]);

  return (
    <div className={`category-page ${darkMode ? "dark" : "light"}`}>
      <h2 style={{ padding: "10px" }}>🗂️ {category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      {loading ? <p>Loading {category} news...</p> : <NewsList articles={articles} />}
    </div>
  );
}

export default CategoryPage;

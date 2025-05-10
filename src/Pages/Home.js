import React, { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

function Home({ darkMode }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const API_KEY = "51dcc11449dd4e9790ba243ffc5e0957";

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);
    setIsSearching(false);
    try {
      const response = await fetch(
       
       `https://newsapi.org/v2/everything?q=apple&from=2025-05-08&to=2025-05-08&sortBy=popularity&apiKey=${API_KEY}`
      );
      
      const data = await response.json();
      console.log(data);
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  }

  async function handleSearch(query) {
    setLoading(true);
    setIsSearching(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error searching news:", error);
    }
    setLoading(false);
  }

  return (
    <div className={`home ${darkMode ? "dark" : "light"}`}>
      <h2 style={{ padding: "10px" }}>
        {isSearching ? "🔍 Search Results" : "📰 Top News"}
      </h2>

      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : articles.length > 0 ? (
        <NewsList articles={articles} />
      ) : (
        <p style={{ textAlign: "center" }}>No news found.</p>
      )}
    </div>
  );
}

export default Home;

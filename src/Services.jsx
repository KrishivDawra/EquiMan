import React, { useState } from "react";
import axios from "axios";

import { Link } from 'react-router-dom'
import Header from './components/Header';


function App() {
  const [query, setQuery] = useState(""); // Search query
  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  // Function to handle the search
  const handleSearch = async () => {
    if (!query.trim()) return; // If query is empty, do nothing

    setLoading(true); // Start loading
    setError(""); // Reset error
    setResults([]); // Clear previous results

    try {
      // Use CORS proxy (All Origins) to bypass CORS
      const response = await axios.get(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://serpapi.com/search?api_key=0a2849c38917c838e598bf4770127b2729d1ddca2b4a006a97dc94179e7328ad&engine=google&q=${query}`
        )}`
      );

      // Set results from SerpApi response
      setResults(response.data.organic_results || []);
    } catch (err) {
      // Handle errors
      setError("Failed to fetch search results. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
    
    {/* <div className='dark:bg-gray-900 dark:text-white w-full  h-full'> */}
      <div className="fixed w-full"><Header/></div>
    {/* <div className='bg-green-400 dark:bg-gray-900 dark:text-white'>
              <Header/>
          </div> */}
    <div className=" pb-44 dark:bg-gray-900 dark:text-white bg-white text-black flex flex-col items-center justify-center">
    {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display search results */}
      <ul className="mt-28">
        {results.map((result, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              {result.title}
            </a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
      {/* Top bar */}
      

      {/* Main Section */}
      <div className="flex flex-col items-center  space-y-6 mt-10">
        <h1 className="text-3xl font-semibold text-green ">What can I help with? <span className="animate-ping">●</span></h1>

        {/* Input Section */}
        <div className="w-full max-w-lg ">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg ">
            <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Ask your Question"
              className="bg-gray-800 text-white w-full outline-none"
            />
            <button className="text-gray-400 hover:text-white ml-4" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
          What is hydroponics?
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
          How does hydroponics differ from traditional soil-based farming?
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
          What are the main types of hydroponic systems?
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
          What are the advantages of hydroponics?
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
          What nutrients are required in hydroponics?
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            More
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-12 text-gray-500 text-sm fixed bottom-2">
      © 2024 Equimen, Inc. all rights are reserved & protected
      </div>
    </div>

      {/* </div> */}
    
  
    </>
  );
}

export default App;

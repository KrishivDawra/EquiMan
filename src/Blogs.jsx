import React from 'react'
import Header from './components/Header'
import  { useState } from "react";
import { Link } from 'react-router-dom'
import Blogimp from './blogimp';
import blogimp1 from './blogimp1';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, formData]);
    setFormData({ title: "", author: "", content: "" });
  };

  return (
    <div bg-white>
      <div>
        <Header />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-white flex justify-center items-center" >Blog Manager</h1>
      <div className=" flex justify-center items-center min-h-screen bg-gray-100 px-6">
        <div className="flex flex-row-reverse gap-5 w-full max-w-screen-lg px-8">


          {/* Add Blog Form */}
          <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white shadow rounded ">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Author:</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Content:</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Blog
            </button>
          </form>

          
           


            

            <div className='flex flex-row pt-5'>
              <Blogimp/>
              {/* Display Blogs */}
         <div >
            {/* <h2 className="text-2xl font-bold mb-4 flex ">All Blogs</h2> */}
            {blogs.length === 0 ? (
              <p >.</p>
            ) : (
              blogs.map((blog, index) => (
                <blogimp1 key={index} {...blog}/>
              ))
            )}
              </div>
            </div>
            

            



         
            
          
        </div>
      </div>
    </div>
  );
};

export default Blogs;

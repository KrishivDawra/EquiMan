import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Blogimp1 from './Blogimp1';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  // Fetch blogs from the server
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setBlogs([...blogs, formData]);
        setFormData({ title: '', author: '', content: '' });
      })
      .catch((error) => console.error('Error saving blog:', error));
  };

  return (
    <div >
      <Header />
      <div className='h-1 bg-slate-300 rounded-lg mb-4'>
        .
      </div>
      <h1 className="text-3xl font-bold mb-6 text-white font-serif text-center"><u>BLOG HUB</u></h1>
      <div className="p-5 min-h-screen bg-black ">
        <div className="flex flex-row-reverse w-full  ">
          {/* Blog Form */}
          <form onSubmit={handleSubmit} className="mb-2 p-4 bg-black text-white border-2  border-white   shadow rounded-lg w-1/3">
          <div>
            <h1 className='font-serif font-bold text-lg '><center>Submit Your BLOGS</center></h1>
          </div>
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

          {/* Display Blogs */}
          <div className="w-2/3 grid grid-cols-3 gap-6 bg-black">
            {blogs.length === 0 ? (
              <p></p>
            ) : (
              [...blogs].reverse().map((blog, index) => (
                <Blogimp1 key={index} {...blog} />
              ))
            )}
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;

import React from 'react'
import Header from './components/Header'

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
    <div className='bg-black'>
      <Header/>
    </div>
  )
}

      {/* Add Blog Form */}
      <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white shadow rounded">
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
      <div>
        <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs added yet.</p>
        ) : (
          blogs.map((blog, index) => (
            <Blogimp key={index} {...blog} />
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default Blogs;

import React from 'react'

const BlogsPROP = (props) => {
  return (
    <div className="group perspective w-80 h-64">
  {/* Card Container */}
  <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
    {/* Front Face */}
    <div className="absolute inset-0 bg-white flex flex-col border-2 border-black p-4 shadow-lg backface-hidden">
      <h1 className="text-lg font-bold font-serif text-blue-700">
        Author: {props.author}
      </h1>
      <h1 className="text-md font-serif">Title: {props.title}</h1>
      <h1 className="text-blue-700 text-lg font-bold">Description:</h1>
      <h1>{props.content}</h1>
    </div>

    {/* Back Face */}
    <div className="absolute inset-0 bg-blue-500 text-white flex flex-col justify-center items-center border-2 border-black shadow-lg rotate-y-180 backface-hidden">
      <h1 className="text-xl font-bold">More Information</h1>
      <p>Explore this blog for exciting details!</p>
    </div>
  </div>
</div>

  )
}

export default BlogsPROP
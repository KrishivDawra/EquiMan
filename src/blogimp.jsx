import React from "react";
import blogs from "./blogs.json"
import BlogsPROP from "./BlogPROP";
const Blogimp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((ele)=>{
        return <BlogsPROP
        author={ele.author}
        title={ele.title}
        content={ele.content}/>
      })}
    </div>
  );
};

export default Blogimp;

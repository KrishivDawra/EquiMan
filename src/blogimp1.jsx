import React from "react";

const Blogimp1 = ({ title, author, content }) => {
  return (
    <div className="relative gap-6 h-[320px] p-2 w-[245px] border-4 border-black shadow-xl  overflow-hidden group">
  {/* Front Side */}
  <div className="absolute inset-0 bg-white transition-transform duration-500 transform group-hover:translate-y-full">
    <h1 className="text-lg font-bold font-serif text-blue-700">
      Author: {author}
    </h1>
    <h1 className="text-md font-serif">Title: {title}</h1>
    <h1 className="text-blue-700 text-lg font-bold">Description:</h1>
    <p>{content}</p>
  </div>

  {/* Back Side */}
  <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
    <h1 className="text-xl font-bold">More Information</h1>
  </div>
</div>
  );
};

export default Blogimp1;

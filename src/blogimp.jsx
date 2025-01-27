import React from "react";

const Blogimp = ({ title, author, content }) => {
  return (
    <div className="p-4 mb-4 bg-white shadow rounded border">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">By {author}</p>
      <p>{content}</p>
    </div>
  );
};

export default Blogimp;

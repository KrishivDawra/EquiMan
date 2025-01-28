import React from 'react'

const BlogsPROP = (props) => {
  return (
    <div className='flex flex-col h-68 max-w-3xl border-4 shadow-xl border-black p-2'>
        <h1 className='text-lg font-bold font-serif text-blue-700'>Author: {props.author}</h1>
        <h1 className='text-md font-serif'>Title: {props.title}</h1>
        <h1 className='text-blue-700 text-lg font-bold'>Description:</h1>
        <h1>{props.content}</h1>
    </div>
  )
}

export default BlogsPROP
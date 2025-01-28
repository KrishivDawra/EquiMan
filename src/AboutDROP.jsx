import React, { useState } from 'react';

const AboutDrop = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the visibility
  };

  const sections = [
    {
      title: 'Mental Health & Well-being',
      content: 'Breaking stigma, promoting open discussions, and providing resources to support men’s emotional health without judgment.',
    },
    {
      title: 'Legal Bias & Family Rights',
      content: 'Advocating fair treatment in custody, alimony, and family law with legal resources and support for men.',
    },
    {
      title: 'Challenging Gender Norms',
      content: 'Redefining masculinity, encouraging self-expression, and creating a society where men embrace vulnerability without fear.',
    },
    {
      title: 'Access to Support',
      content: 'Bridging gaps in mental health, education, and peer support to empower men with essential resources.',
    },
  ];

  return (
    <div className='flex flex-col gap-4' id='krish'>
      {sections.map((section, index) => (
        <div>
            <div key={index} className='border-2 w-[450px] p-3'>
            <div className='flex justify-between'>
                <h1
                    className='text-white cursor-pointer text-[17px] font-serif font-bold flex justify-left items-left'
                    onClick={() => handleToggle(index)}
                >
                    {section.title}
                </h1>
                <span className='text-white cursor-pointer'>&#11167;</span>
            </div>
            {activeIndex === index && (
                <p className='text-white'>{section.content}</p>
            )}
            </div>

            
        </div>
      ))}
    </div>
  );
};

export default AboutDrop;

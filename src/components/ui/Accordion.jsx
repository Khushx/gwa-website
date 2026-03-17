import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <ChevronDown size={20} className="accordion-chevron" />
      </button>
      <div className="accordion-content">
        <div className="accordion-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

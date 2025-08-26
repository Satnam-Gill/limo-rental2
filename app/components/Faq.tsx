'use client';
import { useState } from "react";


// FAQ Accordion Item Component
export default function FaqItem({ faq }: { faq: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white shadow-lg border border-primary/10 transition-all duration-300">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-primary">{faq.question}</span>
        <span
          className={`ml-4 transition-transform duration-300 ${
            open ? "rotate-180 text-secondary" : "text-primary"
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`px-6 pb-5 text-gray-700 text-base transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
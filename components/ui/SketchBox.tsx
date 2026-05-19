import React from 'react';

interface SketchBoxProps {
  children: React.ReactNode;
  title: string;
}

export default function SketchBox({ children, title }: SketchBoxProps) {
  return (
    <div className="bg-white border-sketch p-8 md:p-10 my-10 shadow-[5px_5px_0px_rgba(0,0,0,0.05)]">
      <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
        {title}
      </h2>
      <div className="text-slate-600 font-medium leading-relaxed">
        {children}
      </div>
    </div>
  );
}
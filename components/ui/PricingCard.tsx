import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  sessionInfo: string;
  features: string[];
  isFeatured?: boolean;
  badgeText?: string;
}

export default function PricingCard({
  title,
  price,
  period = '',
  sessionInfo,
  features,
  isFeatured = false,
  badgeText
}: PricingCardProps) {
  return (
    <div 
      className={`bg-white p-8 border-2 rounded-lg relative transition-all duration-200 hover:-translate-y-1 hover:rotate(-0.5deg) ${
        isFeatured 
          ? 'border-emerald-500 shadow-sketch-accent' 
          : 'border-slate-900 shadow-[4px_4px_0px_#0f172a]'
      }`}
    >
      {isFeatured && badgeText && (
        <span className="absolute -top-3 right-6 bg-emerald-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-emerald-400">
          {badgeText}
        </span>
      )}
      
      <h3 className={`text-xl font-bold ${isFeatured ? 'text-emerald-600' : 'text-slate-900'}`}>
        {title}
      </h3>
      
      <div className="text-4xl font-black text-slate-900 my-3">
        {price} <span className="text-sm font-normal text-slate-400">{period}</span>
      </div>
      
      <div className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded inline-block mb-6">
        {sessionInfo}
      </div>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm font-medium text-slate-600">
            <span className="text-emerald-500 font-black">→</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
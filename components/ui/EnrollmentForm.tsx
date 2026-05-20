"use client";

import { useState } from 'react';

export default function EnrollmentForm() {
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [referrerId, setReferrerId] = useState('');
  const [plan, setPlan] = useState('Special Exam Intake (R500 flat fee)');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "27723713364";
    
    let message = `Hi Francisco! ⚡ I would like to secure my spot for the ${plan}. My name is ${name} (Student No: ${studentNumber}).`;
    
    if (referrerId.trim() !== '') {
      message += ` I was referred by Student No: ${referrerId}.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border-2 border-slate-900 rounded-xl shadow-[8px_8px_0px_#0f172a] text-left">
      <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
        Lock In Your Spot
      </h3>
      
      <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors font-medium text-slate-900" placeholder="e.g. Siyabonga" />
        </div>

        <div>
          <label htmlFor="studentNumber" className="block text-sm font-bold text-slate-700 mb-2">Your Student Number</label>
          <input type="text" id="studentNumber" required value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors font-medium text-slate-900" placeholder="e.g. 224000123" />
        </div>

        <div>
          <label htmlFor="plan" className="block text-sm font-bold text-slate-700 mb-2">Select Your Mentorship Track</label>
          <select id="plan" value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors font-bold text-slate-900 cursor-pointer appearance-none bg-slate-50">
            <option value="Special Exam Intake (R500 flat fee)">Special Exam Intake (R500 flat fee)</option>
            <option value="Standard Plan (R250/hour)">Standard Plan (R250/hour)</option>
          </select>
        </div>

        <div className="pt-2 border-t-2 border-dashed border-slate-200 mt-4">
          <label htmlFor="referrerId" className="block text-sm font-bold text-emerald-600 mb-2">Referred by a friend? (Optional)</label>
          <input type="text" id="referrerId" value={referrerId} onChange={(e) => setReferrerId(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors font-medium text-slate-900" placeholder="Enter their Student Number" />
          <p className="text-xs text-slate-500 font-semibold mt-2">If a current student referred you, enter their student number so they get their R110 cash bounty once you enroll.</p>
        </div>

        <button type="submit" className="w-full bg-emerald-500 text-white font-extrabold px-8 py-4 rounded hover:bg-slate-900 transition-colors shadow-[4px_4px_0px_#0f172a] text-lg tracking-wide uppercase mt-6">
          Secure Your Spot
        </button>
      </form>
    </div>
  );
}
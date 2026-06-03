"use client";

import { useState } from 'react';
import { submitEnrollment } from '@/app/actions/enrol';

interface EnrollmentFormProps {
  onSuccess?: () => void;
}

export default function EnrollmentForm({ onSuccess }: EnrollmentFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleActionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(''); // Clear previous errors

    const formData = new FormData(e.currentTarget);
    
    // ==========================================
    // 1. FRONT-END REACT VALIDATION
    // ==========================================
    const studentNum = formData.get('studentNumber')?.toString().trim() || '';
    const whatsappNum = formData.get('whatsappNumber')?.toString().replace(/\s+/g, '') || '';

    // Regex Rules
    const studentRegex = /^\d{9}$/;
    const whatsappRegex = /^0\d{9}$/;

    if (!studentRegex.test(studentNum)) {
      setErrorMessage("Invalid Student Number. It must be exactly 9 digits.");
      setIsSubmitting(false);
      return; // Stop execution, don't hit the server
    }

    if (!whatsappRegex.test(whatsappNum)) {
      setErrorMessage("Invalid WhatsApp Number. It must be 10 digits and start with 0.");
      setIsSubmitting(false);
      return;
    }

    // ==========================================
    // 2. PASS TO SERVER ACTION
    // ==========================================
    // If we passed all the front-end checks, now we send it to SQLite
    const result = await submitEnrollment(formData);

    if (result.success) {
      setIsSuccess(true);
      onSuccess?.();
    } else {
      // Catch any server-side errors (like Duplicate Entries)
      setErrorMessage(result.message);
    }
    
    setIsSubmitting(false);
  };

  // ... (Success UI remains exactly the same)
  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-emerald-50 p-8 border-2 border-emerald-500 rounded-xl shadow-[8px_8px_0px_#10b981] text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-700 font-medium mb-6">
          I'll be reaching out to you on WhatsApp shortly to have a quick chat, share the EFT details, and get you ready for the sessions!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 border-2 border-slate-900 rounded-xl shadow-[8px_8px_0px_#0f172a] text-left">
      <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
        Lock In Your Spot
      </h3>
      
      {/* THE CUSTOM REACT ERROR BANNER */}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 text-red-700 rounded-lg text-sm font-black text-center shadow-[4px_4px_0px_#ef4444] animate-pulse">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleActionSubmit} className="space-y-5">
        
        {/* Note: I removed the HTML5 'pattern' attributes here because our React validation handles it much more gracefully! */}
        
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium" placeholder="e.g. Siyabonga Mthembu" />
        </div>

        <div>
          <label htmlFor="studentNumber" className="block text-sm font-bold text-slate-700 mb-2">Your Student Number</label>
          <input type="text" id="studentNumber" name="studentNumber" required className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium font-mono" placeholder="e.g. 224000123" />
        </div>

        <div>
          <label htmlFor="whatsappNumber" className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
          <input type="tel" id="whatsappNumber" name="whatsappNumber" required className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium font-mono" placeholder="e.g. 0721234567" />
        </div>

        <div>
          <label htmlFor="plan" className="block text-sm font-bold text-slate-700 mb-2">Select Your Mentorship Track</label>
          <select id="plan" name="plan" className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-bold bg-slate-50 cursor-pointer">
            <option value="Supplemental Exam Intake (R500)">Supplemental Exam Intake (R500 flat fee)</option>
            <option value="Standard Plan (R250)">Standard Plan (R250/hour)</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full text-white font-extrabold px-8 py-4 rounded shadow-[4px_4px_0px_#0f172a] text-lg tracking-wide uppercase mt-6 transition-all ${isSubmitting ? 'bg-slate-500 cursor-not-allowed translate-y-1 shadow-none' : 'bg-emerald-500 hover:bg-emerald-400 hover:-translate-y-1 active:translate-y-1 active:shadow-none'}`}
        >
          {isSubmitting ? 'Processing...' : 'Secure Your Spot'}
        </button>
      </form>
    </div>
  );
}
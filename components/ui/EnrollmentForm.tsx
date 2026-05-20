"use client";

import { useState } from 'react';
import  submitEnrollment  from '@/app/actions/enrol';

export default function EnrollmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleActionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Package the form elements
    const formData = new FormData(e.currentTarget);
    
    // Call the server action directly
    const result = await submitEnrollment(formData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrorMessage(result.message);
    }
    
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-emerald-50 p-8 border-2 border-emerald-500 rounded-xl shadow-[8px_8px_0px_#10b981] text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-700 font-medium mb-6">
          I will WhatsApp you the EFT details shortly. Once your payment clears, your spot is locked in and your UKZN email will be granted OneDrive access.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 border-2 border-slate-900 rounded-xl shadow-[8px_8px_0px_#0f172a] text-left">
      <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
        Lock In Your Spot
      </h3>
      
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm font-bold text-center">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleActionSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium" placeholder="e.g. Siyabonga Mthembu" />
        </div>

        <div>
          <label htmlFor="studentNumber" className="block text-sm font-bold text-slate-700 mb-2">Your Student Number</label>
          <input type="text" id="studentNumber" name="studentNumber" required className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium" placeholder="e.g. 224000123" />
          <p className="text-xs text-slate-500 font-semibold mt-2">
            This will be used to grant your student email access to the live session recordings on OneDrive.
          </p>
        </div>

        <div>
          <label htmlFor="whatsappNumber" className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
          <input type="tel" id="whatsappNumber" name="whatsappNumber" required className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium" placeholder="e.g. 072 123 4567" />
        </div>

        <div>
          <label htmlFor="plan" className="block text-sm font-bold text-slate-700 mb-2">Select Your Mentorship Track</label>
          <select id="plan" name="plan" className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-bold bg-slate-50">
            <option value="Special Exam Intake (R500)">Special Exam Intake (R500 flat fee)</option>
            <option value="Standard Plan (R250)">Standard Plan (R250/hour)</option>
          </select>
        </div>

        <div className="pt-2 border-t-2 border-dashed border-slate-200 mt-4">
          <label htmlFor="referrerId" className="block text-sm font-bold text-emerald-600 mb-2">Referred by a friend? (Optional)</label>
          <input type="text" id="referrerId" name="referrerId" className="w-full px-4 py-3 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 font-medium" placeholder="Enter their Student Number" />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full text-white font-extrabold px-8 py-4 rounded shadow-[4px_4px_0px_#0f172a] text-lg tracking-wide uppercase mt-6 ${isSubmitting ? 'bg-slate-500 cursor-not-allowed' : 'bg-emerald-500 hover:bg-slate-900'}`}
        >
          {isSubmitting ? 'Processing...' : 'Secure Your Spot'}
        </button>
      </form>
    </div>
  );
}
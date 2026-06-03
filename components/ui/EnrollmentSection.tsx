"use client";

import { useState } from 'react';
import CountdownTimer from '@/components/ui/CountdownTimer';
import EnrollmentForm from '@/components/ui/EnrollmentForm';

export default function EnrollmentSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <footer className="mt-16 pb-12 text-center">
      {!isSuccess && (
        <div className="mb-8 transition-opacity duration-500">
          <CountdownTimer targetDate="2026-06-22T09:00:00" /><br/><br/>
          <h2 className="text-3xl font-black text-slate-900 mb-2">This is your last chance to pass ISTN2IP! <br/> </h2>
          <h2 className="text-3xl font-black text-slate-900 mb-2">What are you waiting for?</h2>
          <p className="text-slate-500 font-medium">Select a plan below to lock in your spot, and we'll finalize the details over WhatsApp.</p>
        </div>
      )}
      
      {/* Render the Client Component Form */}
      <EnrollmentForm onSuccess={() => setIsSuccess(true)} />
      
      <p className="text-xs font-semibold text-slate-400 mt-6 max-w-sm mx-auto">
        Be on the lookout for my WhatsApp messages to complete your enrollment!
        We can also discuss any questions you have about the plans {"(split payments)"}, scheduling,
         or how I can best support your exam prep. I&apos;m here to help you succeed!
      </p>
    </footer>
  );
}
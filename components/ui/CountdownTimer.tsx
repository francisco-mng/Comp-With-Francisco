"use client";

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return <div className="min-h-[96px]"></div>; // Placeholder to avoid layout shift

  // Check if all values are 0 (meaning the target date has passed)
  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return null; // Return nothing, making the entire component disappear
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-black text-red-600 uppercase tracking-wider mb-2">Time Until Supplemental Exam</h3>
      <div className="flex justify-center gap-2 md:gap-4 my-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center p-3 bg-red-50 border-2 border-red-500 rounded-lg min-w-[70px] md:min-w-[80px] shadow-[4px_4px_0px_#ef4444]">
            <span className="text-2xl md:text-3xl font-black text-red-600 font-mono">{value.toString().padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs font-bold text-red-800 uppercase tracking-widest">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

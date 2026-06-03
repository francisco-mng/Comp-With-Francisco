import Image from 'next/image';
import CountdownTimer from '@/components/ui/CountdownTimer';

export default function HeroSection() {
  return (
    <header className="text-center mb-14">
            {/* P should be super bold and classy ! */}
            <h3 className='text-lg font-bold text-slate-900'>Welcome to </h3>
             <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              ISTN2IP <br className="hidden md:inline" />Exam Mentorship Program
            </h1>
            <br className="hidden md:inline" />
            <div className="text-emerald-500 text-xs font-extrabold uppercase tracking-[0.2em] mb-2">
              Hi, I'm your instructor Francisco{";)"} <br className="hidden md:inline" />
            </div>
            <br></br>
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden shadow-sketch-accent">
                <Image 
                  src="/images/francisco-profile.jpg" // Place your profile photo in your public/images/ directory
                  alt="Francisco - UKZN CS/IT Graduate"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div><br></br>
            <div className="text-emerald-500 text-xs font-extrabold uppercase tracking-[0.2em] mb-2">
              I graduated with a BSc in Computer Science & IT. <br className="hidden md:inline" /><br className="hidden md:inline"></br>
               <strong>Let's help you get there ;{")"}</strong> 
            </div>
           
            <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
              Let me help you absolutely crush your ISTN2IP supplemental exam! If you're writing the supp, this is the final stretch, and I'm here to make sure you walk in with total confidence.
              <br></br><br></br>
              With the exam just around the corner, we're going to focus on the core concepts and problem-solving techniques that will actually get you the marks.
              <br></br><br></br>
              This is your last chance to pass the module. <br></br><br></br>Let's make it count ;{")"}
            </p>
            
            <CountdownTimer targetDate="2026-06-22T09:00:00" />
          </header>
  );
}
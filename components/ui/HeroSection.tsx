import Image from 'next/image';

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
              Let me help you crush your ISTN2IP exam! You can still improve I&apos;m here to help you understand better. 
              <br></br><br></br>
              Since exams are around the corner, my main priority is to help you understand the core concepts and problem-solving techniques that will allow you to excel in your exams.
            </p>
          </header>
  );
}
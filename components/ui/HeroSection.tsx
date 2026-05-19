import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-10 pb-20 border-b-2 border-dashed border-slate-200 mb-12">
      
      {/* Left Column: The Pain Point & Credibility Hook */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 mb-6 justify-center md:justify-start">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-4 py-1.5 rounded-full tracking-[0.1em] uppercase shadow-sm border border-emerald-200">
            BSc CS & IT Graduate
          </span>
          <span className="bg-slate-900 text-white text-xs font-extrabold px-4 py-1.5 rounded-full tracking-[0.1em] uppercase shadow-sm">
            2+ Years UKZN SI Leader
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
          Stop Drowning in <br />
          {/* Sketchy Highlight Effect */}
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-white px-3 py-1">Programming Theory.</span>
            <span className="absolute inset-0 bg-slate-900 rounded-[10px_3px_10px_3px/3px_10px_3px_10px] -rotate-1"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 font-medium mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          If you are struggling to turn concepts into working code, you aren't alone. After mentoring 100+ students, I know exactly where the disconnect happens. Let's map the logic and survive this exam season together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a 
            href="#bootcamp" 
            className="w-full sm:w-auto bg-emerald-500 text-white font-extrabold px-8 py-4 rounded hover:bg-slate-900 transition-colors shadow-sketch-primary text-center text-lg tracking-wide"
          >
            Join the Exam Bootcamp
          </a>
        </div>
      </div>

      {/* Right Column: The Founder Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="w-full h-full border-sketch overflow-hidden shadow-sketch-accent relative z-10 bg-white">
            <Image 
                src="/public/images/francisco-profile.jpg" 
                alt="Francisco - Logic Architect"
                fill
                className="object-cover"
                priority
                
            />
          </div>
          <div className="absolute inset-0 bg-emerald-100 border-2 border-emerald-500 rounded-[225px_15px_255px_15px/15px_255px_15px_225px] translate-x-4 translate-y-4 -z-10"></div>
        </div>
      </div>

    </section>
  );
}
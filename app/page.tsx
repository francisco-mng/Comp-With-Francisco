import Image from 'next/image';
import SketchBox from '@/components/ui/SketchBox';
import PricingCard from '@/components/ui/PricingCard';
import HeroSection from '@/components/ui/HeroSection';
import EnrollmentForm from '@/components/ui/EnrollmentForm';

//Importing images: 
import testimonial1 from '@/public/images/testimonial1.png'
import testimonial2 from '@/public/images/testimonial2.png'
import whatsapp from '@/public/images/whatsapp_helpline.png'

export default function CodingEssentialsPage() {
  const plans = [
    {
      title: "Standard Plan",
      price: "R250",
      period: "/ 1 hour session",
      sessionInfo: "Flexible Scheduling",
      features: ["Last-minute exam prep", "On-demand ", "Last minute Past paper deep-dives"],
      isFeatured: false
    },
    {
      title: "Special Exam Intake (pay once)",
      price: "R500",
      period: "/ till end of exams",
      sessionInfo: "3hr sessions 3x a week",
      features: [
        "Sign in now and get help until you finish writing your exams OR sup",
        "3 Hours total deep-dive mentorship for 3x a week",
        "Priority WhatsApp Helpline. Response in less than 24H",
        "Recordings & Code included",
        "Send me custom questions and past papers, I'll help you go through them", 
        "Learn more in one session than anywhere else", 
        "BEST VALUE"
      ],
      isFeatured: true
    }
  ];

  const images = {

  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header Profile Section */}
      <HeroSection></HeroSection>

      {/* Core Mission Manifesto */}
      <SketchBox title="Understand faster than anywhere else 🧠">
        <p>In a world of generative AI, anyone can prompt...
          This leads to students and lectures not spending enough time getting you to understand programming. 
          And the exams require you to understand programming, not just copy and paste code from AI

          <br></br><br></br>
          <strong>That&apos;s where I come in ;{")"} </strong>
         
        </p>
      </SketchBox>

      <SketchBox title="Pass your ISTN2IP exams with confidence.🔥🔥🔥">
        <p>
          I have mentored 200+ over 2 years as an SI Leader at UKZN. 
          I'm confident that you too can be one of the students who have transformed from struggling to understanding programming.
          <br/><br/>
          What I offer is not just tutoring, but high quality teachings that are rare and you won't find anywhere else. I have a proven track record of helping students understand programming concepts deeply and effectively, which is crucial for acing your ISTN2IP exams. 
          <br/><br/>
          
          {/* Youtube video iframe */}
        </p>
          </SketchBox>

  <SketchBox title={"Testimonials"}>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Video Column */}
      <div className="flex flex-col gap-4">
        <div>
          <h3><strong><i>"This should really take the place of lectures!! It's highly effective {";)"}" ~ Bongekile</i></strong></h3>
          <div className="w-full aspect-video mt-3">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/AStd30tPLkY?si=Uw50Vf3oDOO95c4j" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              style={{ borderRadius: '0.5rem' }}
            ></iframe>
          </div>
        </div>
        <div>
          <h3><strong><i>"It was really helpful, especially if you don't know how to go about attacking your test, this session sets the tone!! {";)"} " ~ Bongani</i></strong></h3>
          <div className="w-full aspect-video mt-3">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/0IeJaPdhQF8?si=8VfQSjdqUMsFUT5-" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              style={{ borderRadius: '0.5rem' }}
            ></iframe>
          </div>
        </div>


       
      </div>

      {/* Image Column */}
      <div className="relative w-full h-full min-h-[500px]">
        {/* <Image 
          src={testimonial1} 
          alt="Student testimonial" 
          fill
          className="object-contain"
        /> */}
       
        <Image 
          style={{borderRadius: "50px"}}
          src={testimonial2} 
          alt="Student testimonial" 
          fill
          className="object-contain"
        />
        
        {/* <Image 
          src={whatsapp} 
          alt="Student testimonial" 
          fill
          className="object-contain"
        /> */}
      </div>
    </div>
  </SketchBox>

  <SketchBox title={"See the value for yourself! Watch this 👇"}>
    <h1>Best watched on YouTube directly 1.5x speed {";)"}</h1>
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/_wiRvGR473A?si=inuOfDoDn_seT47n" 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <br></br>Watch this video to get a feel for how my teaching style has a track record of transforming students from confusion to clarity faster than anything else you'll find elsewhere.
      <br/><br/>
            I am here to help you understand programming in <strong>C# .NET faster than anywhere else</strong>, just in time for your exams. <br></br> 
            <br></br>This video shows just a taste of the value you're going to get from the <strong><i>Special Exam Intake</i></strong>
    <iframe 
              width="auto%" 
              height="auto%" 
              src="https://www.youtube.com/embed/o7-Pd-vPkOM?si=jJuqayLB1HxL1ooD&amp;start=7" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              style={{ borderRadius: '0.5rem', alignItems: 'center' }}


            ></iframe>
    </SketchBox>

 

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 gap-6 my-12 items-start">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

      {/* Flexible Negotiation Box */}
      <div className="bg-amber-50 border-2 border-dashed border-amber-500 rounded-xl p-6 text-center my-12">
        <p className="italic font-semibold text-amber-900 text-sm md:text-base">
          <strong>Note on Accessibility:</strong> I believe high-quality mentorship should be accessible. If you are a dedicated student but these rates are a barrier, I am entirely open to negotiation. Let&apos;s find a balance that respects your budget and your ambition.
        </p>
      </div>

      {/* Action Footer */}
      <footer className="text-center mt-12">
        <footer className="mt-16 pb-12 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Ready to crush your exam?</h2>
          <p className="text-slate-500 font-medium">Select a plan you're interested in and I'll we'll talk over on WhatsApp.</p>
        </div>
        
        {/* Render the Client Component Form */}
        <EnrollmentForm />
        
        <p className="text-xs font-semibold text-slate-400 mt-6 max-w-sm mx-auto">
          Be on the lookout for my WhatsApp messages to complete your enrollment!
          We can also discuss any questions you have about the plans {"(split payments)"}, scheduling,
           or how I can best support your exam prep. I&apos;m here to help you succeed!
        </p>
      </footer>
      </footer>
    </div>
  );
}
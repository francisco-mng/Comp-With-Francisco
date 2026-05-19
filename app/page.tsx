import Image from 'next/image';
import SketchBox from '@/components/ui/SketchBox';
import PricingCard from '@/components/ui/PricingCard';
import HeroSection from '@/components/ui/HeroSection';

export default function CodingEssentialsPage() {
  const plans = [
    {
      title: "Standard Plan",
      price: "R350",
      period: "/ hour",
      sessionInfo: "Flexible Scheduling",
      features: ["Last-minute exam prep", "On-demand logic mapping", "Past paper deep-dives"],
      isFeatured: false
    },
    {
      title: "Special Intake",
      price: "R1,800",
      period: "/ month",
      sessionInfo: "4 Sessions (3 Hours Each)",
      features: [
        "12 Hours total deep-dive mentorship",
        "Priority WhatsApp Helpline",
        "Recordings & Source Code included",
        "Effective Rate: R150/h"
      ],
      isFeatured: true
    },
    {
      title: "Saver Plan",
      price: "R1,300",
      period: "/ month",
      sessionInfo: "4 Sessions (1.5 Hours Each)",
      features: ["6 Hours total mentorship", "High-impact weekly momentum", "Core concept focus"],
      isFeatured: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header Profile Section */}
      <HeroSection></HeroSection>

      {/* Core Mission Manifesto */}
      <SketchBox title="Beyond the Prompt 🧠">
        <p>In a world of generative AI, anyone can prompt. But only the <strong className="text-slate-900">top 1%</strong> can architect systems, verify logic, and solve the critical architectural problems that AI cannot. We focus on building the intellectual sovereignty required to lead in modern business and software development.</p>
      </SketchBox>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-6 my-12 items-start">
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
        <a 
          href="mailto:franciscomnopdjh@gmail.com?subject=Enrollment%20Inquiry%20-%20Coding%20Essentials"
          className="inline-block bg-slate-900 text-white font-extrabold tracking-wide px-10 py-5 rounded border-2 border-slate-900 transition-all duration-200 hover:bg-transparent hover:text-slate-900 hover:rounded-xl text-lg shadow-sketch-primary"
        >
          SECURE YOUR SPOT
        </a>
        <p className="text-xs font-semibold text-slate-400 mt-4">
          Pay a <strong>R300 enrollment fee</strong> to lock your spot for this intake.
        </p>
      </footer>
    </div>
  );
}
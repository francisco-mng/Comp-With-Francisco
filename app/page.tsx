import React from 'react';

// 1. The TypeScript Interface for strict typing
interface PricingTier {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

// 2. Your static data (No database required yet!)
const pricingTiers: PricingTier[] = [
  {
    id: 'survival',
    title: 'Exam Survival Pass',
    price: 250,
    description: 'Everything you need to master the core concepts and pass your modules.',
    features: [
      'Full access to recorded tutorials',
      'Weekly group review sessions',
      'Access to student Q&A forum'
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'vip',
    title: 'The VIP Carry',
    price: 500,
    description: 'For students who want priority help, code reviews, and guaranteed support.',
    features: [
      'Everything in Exam Survival',
      'Priority code debugging',
      '1-on-1 emergency exam prep call',
      'Architecture & logic reviews'
    ],
    isPopular: true,
    buttonText: 'Secure Your Spot'
  }
];

// 3. The Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center">
      
      {/* Hero Section (Optional intro before pricing) */}
      <div className="text-center pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Comp With Francisco
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Master your Computer Science modules with principles-first learning. No fluff, just the logic you need to ace the exam.
        </p>
      </div>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Crush Your CS Exams
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple, upfront pricing to get you through the exam session. No hidden fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* Map over the pricing array */}
            {pricingTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`flex flex-col p-8 rounded-2xl border relative ${
                  tier.isPopular 
                    ? 'bg-gray-900 shadow-2xl border-gray-800 transform md:-translate-y-4' 
                    : 'bg-white shadow-lg border-gray-100'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <span className="bg-blue-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl font-semibold ${tier.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.title}
                </h3>
                
                <p className={`mt-4 flex-grow ${tier.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
                
                <div className={`mt-6 flex items-baseline text-5xl font-extrabold ${tier.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  R{tier.price}
                  <span className={`ml-1 text-xl font-medium ${tier.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                    /session
                  </span>
                </div>
                
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${tier.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`${tier.isPopular ? 'text-blue-400' : 'text-green-500'} mr-3`}>
                        ✓
                      </span> 
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`mt-8 block w-full font-bold py-3 px-4 rounded-lg transition-colors ${
                    tier.isPopular 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
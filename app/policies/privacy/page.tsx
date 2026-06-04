import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Policies</span>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Privacy Policy</span>
        </nav>
s
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-8">Last Updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          
          <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
            <p className="text-base leading-relaxed">
              At <span className="text-sky-400 font-semibold">Comp With Francisco</span>, we take your privacy 
              seriously. This policy outlines how we collect, use, and protect your personal information in 
              compliance with the Protection of Personal Information Act (POPIA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              1. Information We Collect
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 space-y-2">
              <p className="leading-relaxed">
                We only collect information that is strictly necessary to provide our mentorship services. 
                When you register for a session or create an account, we may collect your name, email address, 
                educational institution, and phone number. We do not store or process your raw payment or credit 
                card information on our servers; all transactions are securely handled by our third-party payment 
                processor.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              2. How We Use Your Information
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 space-y-2">
              <p className="leading-relaxed">
                The personal data we collect is used exclusively for operating our platform and delivering 
                educational content. This includes scheduling sessions, sending you platform access links, 
                providing academic feedback, and communicating updates about your mentorship package. We will 
                never sell, rent, or trade your personal information to outside companies or marketing agencies.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              3. Data Security
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 space-y-2">
              <p className="leading-relaxed">
                We implement strict security measures to protect your data. Your information is stored in 
                secure, password-protected databases, and all communication between your browser and our servers 
                is encrypted. We continuously monitor our architecture to prevent unauthorized access.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              4. Your Rights (POPIA Compliance)
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 p-2 space-y-2">
              <p className="leading-relaxed">
                Under POPIA, you have the right to request access to the personal information we hold about you. 
                You also have the right to request that we update, correct, or permanently delete your data from 
                our systems. To exercise any of these rights, please email us directly at{" "}
                <a href="mailto:support@compwithfrancisco.co.za" className="text-sky-400 underline hover:text-sky-300">
                  support@compwithfrancisco.co.za
                </a>
                .
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
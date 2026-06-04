import Link from 'next/link';
import SketchBox from '@/components/ui/SketchBox';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-slate-500 mb-8 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/policies" className="hover:text-blue-600 transition-colors">Policies</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Privacy Policy</span>
      </nav>

      <SketchBox title="Privacy Policy">
        <p className="text-sm text-slate-500 mb-8 italic">Last Updated: June 2026</p>

        <div className="space-y-8 text-slate-700">
          
          <section className="bg-amber-50 border-2 border-dashed border-amber-200 p-6 rounded-xl">
            <p className="text-base leading-relaxed">
              At <strong className="text-amber-900">Comp With Francisco</strong>, we take your privacy 
              seriously. This policy outlines how we collect, use, and protect your personal information in 
              compliance with the Protection of Personal Information Act (POPIA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              1. Information We Collect
            </h2>
            <div className="border-l-4 border-blue-400 pl-4 space-y-2">
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
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              2. How We Use Your Information
            </h2>
            <div className="border-l-4 border-blue-400 pl-4 space-y-2">
              <p className="leading-relaxed">
                The personal data we collect is used exclusively for operating our platform and delivering 
                educational content. This includes scheduling sessions, sending you platform access links, 
                providing academic feedback, and communicating updates about your mentorship package. We will 
                never sell, rent, or trade your personal information to outside companies or marketing agencies.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              3. Data Security
            </h2>
            <div className="border-l-4 border-blue-400 pl-4 space-y-2">
              <p className="leading-relaxed">
                We implement strict security measures to protect your data. Your information is stored in 
                secure, password-protected databases, and all communication between your browser and our servers 
                is encrypted. We continuously monitor our architecture to prevent unauthorized access.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              4. Your Rights (POPIA Compliance)
            </h2>
            <div className="border-l-4 border-blue-400 pl-4 space-y-2">
              <p className="leading-relaxed">
                Under POPIA, you have the right to request access to the personal information we hold about you. 
                You also have the right to request that we update, correct, or permanently delete your data from 
                our systems. To exercise any of these rights, please email us directly at{" "}
                <a href="mailto:francisco@compwithfrancisco.co.za" className="text-blue-600 underline hover:text-blue-500 font-medium">
                  francisco@compwithfrancisco.co.za
                </a>
                .
              </p>
            </div>
          </section>

        </div>
      </SketchBox>
    </div>
  );
}
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Policies</span>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Refund & Cancellation</span>
        </nav>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
          Refund and Cancellation Policy
        </h1>
        <p className="text-sm text-slate-400 mb-8">Last Updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          
          <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
            <p className="text-base leading-relaxed">
              Welcome to <span className="text-sky-400 font-semibold">Comp With Francisco</span>. 
              We are committed to providing high-quality software engineering mentorship. Because our 
              services range from time-blocked live sessions to ongoing monthly support, our refund and 
              cancellation terms vary depending on the specific product or service purchased.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              1. Special Exam Intakes & Crash Courses
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 space-y-2">
              <p className="font-semibold text-amber-400">Policy: Strictly Once-Off & Non-Refundable</p>
              <p className="leading-relaxed">
                These intensive sessions require significant time-blocking and personalized preparation. 
                Because we offer upfront value through free introductory sessions and public testimonials 
                to ensure you are fully confident in your investment, all payments for special exam intakes 
                are final. By securing a seat, you commit to the program, and that seat cannot be reassigned 
                to another student.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              2. Ongoing Monthly Mentorship
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 space-y-2">
              <p className="font-semibold text-sky-400">Policy: Cancel Anytime, No Pro-Rated Refunds</p>
              <p className="leading-relaxed">
                For rolling monthly mentorship packages, you may cancel your enrollment at any time to 
                prevent future billing. Cancellations must be made via your student dashboard prior to your 
                next billing cycle. We do not offer refunds for sessions already attended or for time blocks 
                that were reserved but unattended by the student.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              3. Digital Products & Resources
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 space-y-2">
              <p className="font-semibold text-slate-400">Policy: Non-Refundable</p>
              <p className="leading-relaxed">
                If you purchase downloadable resources, custom code templates, or pre-recorded video 
                materials, these are strictly non-refundable once accessed or downloaded due to the 
                digital nature of the products.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              4. Technical Outages & Platform Issues
            </h2>
            <div className="border-l-2 border-sky-500/30 pl-4 p-2">
              <p className="leading-relaxed">
                If you experience severe technical difficulties on our platform that prevent you from 
                accessing a scheduled live session, please contact us immediately at{" "}
                <a href="mailto:support@compwithfrancisco.co.za" className="text-sky-400 underline hover:text-sky-300">
                  support@compwithfrancisco.co.za
                </a>
                . If the fault lies within our systems or network infrastructure, we will ensure your 
                session is rescheduled or appropriately compensated.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
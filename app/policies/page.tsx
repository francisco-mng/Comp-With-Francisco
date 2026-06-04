import Link from 'next/link';

export default function PoliciesDirectory() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Policies</span>
        </nav>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
          Legal & Policies
        </h1>
        <p className="text-base text-slate-400 mb-8 leading-relaxed">
          Select a policy below to learn more about our terms of service, cancellation guidelines, and how we protect your personal data.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Refund Policy Card */}
          <Link 
            href="/policies/refund" 
            className="block p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-colors group"
          >
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              Refund & Cancellation
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Read our terms regarding special exam intakes, digital products, and monthly mentorship packages.
            </p>
          </Link>

          {/* Privacy Policy Card */}
          <Link 
            href="/policies/privacy" 
            className="block p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-colors group"
          >
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              Privacy Policy
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Learn how we securely handle and protect your personal information in compliance with POPIA.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}
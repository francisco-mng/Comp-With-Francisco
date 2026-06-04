import Link from 'next/link';
import SketchBox from '@/components/ui/SketchBox';

export default function PoliciesDirectory() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-slate-500 mb-8 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Policies</span>
      </nav>

      <SketchBox title="Legal & Policies">
        <p className="text-base text-slate-600 mb-8 leading-relaxed">
          Select a policy below to learn more about our terms of service, cancellation guidelines, and how we protect your personal data.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Refund Policy Card */}
          <Link 
            href="/policies/refund" 
            className="block group"
          >
            <div className="p-6 bg-white border-2 border-dashed border-slate-300 rounded-xl group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors h-full">
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Refund & Cancellation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Read our terms regarding special exam intakes, digital products, and monthly mentorship packages.
              </p>
            </div>
          </Link>

          {/* Privacy Policy Card */}
          <Link 
            href="/policies/privacy" 
            className="block group"
          >
            <div className="p-6 bg-white border-2 border-dashed border-slate-300 rounded-xl group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors h-full">
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Privacy Policy
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how we securely handle and protect your personal information in compliance with POPIA.
              </p>
            </div>
          </Link>

        </div>
      </SketchBox>
    </div>
  );
}
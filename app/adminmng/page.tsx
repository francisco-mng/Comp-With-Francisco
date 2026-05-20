"use client";

import { useState } from 'react';
import  fetchAdminData  from '@/app/adminmng/admin';

// Define the shape of our SQLite row
type Enrollment = {
  id: number;
  full_name: string;
  student_number: string;
  whatsapp_number: string;
  plan: string;
  referrer_id: string | null;
  created_at: string;
};

export default function AdminDashboard() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState<Enrollment[] | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await fetchAdminData(pin);

    if (result.success && result.data) {
      setStudents(result.data as Enrollment[]);
    } else {
      setError(result.message || "Authentication failed");
      setPin(''); // Clear the input on fail
    }
    
    setIsLoading(false);
  };

  // ==========================================
  // VIEW 1: THE DATA DASHBOARD (Authenticated)
  // ==========================================
  if (students !== null) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8 border-b-2 border-slate-200 pb-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Bootcamp Enrollments</h1>
            <p className="text-emerald-600 font-bold mt-1">Total Leads: {students.length}</p>
          </div>
          <button 
            onClick={() => setStudents(null)} 
            className="text-sm font-bold bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded transition-colors"
          >
            Lock Dashboard
          </button>
        </div>

        <div className="overflow-x-auto bg-white border-2 border-slate-900 rounded-lg shadow-[8px_8px_0px_#0f172a]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 text-sm font-black uppercase tracking-wider">ID</th>
                <th className="p-4 text-sm font-black uppercase tracking-wider">Name</th>
                <th className="p-4 text-sm font-black uppercase tracking-wider">Student No</th>
                <th className="p-4 text-sm font-black uppercase tracking-wider">WhatsApp</th>
                <th className="p-4 text-sm font-black uppercase tracking-wider">Plan</th>
                <th className="p-4 text-sm font-black uppercase tracking-wider">Referrer</th>
                <th className="p-4 text-sm font-black uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {students.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500 font-medium">
                    No enrollments yet. Drop the link in the group chats!
                  </td>
                </tr>
              ) : (
                students.map((student) => (
                  <tr key={student.id} className="hover:bg-emerald-50 transition-colors">
                    <td className="p-4 text-slate-500 font-bold">#{student.id}</td>
                    <td className="p-4 font-bold text-slate-900">{student.full_name}</td>
                    <td className="p-4 text-slate-700">{student.student_number}</td>
                    <td className="p-4 text-emerald-600 font-bold">{student.whatsapp_number}</td>
                    <td className="p-4 text-slate-700 font-semibold">{student.plan}</td>
                    <td className="p-4 text-amber-600 font-bold">{student.referrer_id || '-'}</td>
                    <td className="p-4 text-slate-500 text-sm">
                      {new Date(student.created_at).toLocaleString('en-ZA')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: THE LOCK SCREEN (Unauthenticated)
  // ==========================================
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white p-8 border-2 border-slate-900 rounded-xl shadow-[8px_8px_0px_#0f172a] text-center">
        <h2 className="text-2xl font-black text-slate-900 mb-6">MNG Authorization</h2>
        
        {error && (
          <div className="mb-4 text-red-600 font-bold bg-red-50 p-2 rounded border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter Override PIN"
            className="w-full px-4 py-3 mb-4 border-2 border-slate-300 rounded focus:border-emerald-500 focus:outline-none font-black text-center tracking-widest text-xl"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 text-white font-extrabold px-6 py-3 rounded hover:bg-emerald-500 transition-colors tracking-wide uppercase"
          >
            {isLoading ? 'Verifying...' : 'Access Records'}
          </button>
        </form>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import { fetchAdminData, togglePaymentStatus } from '@/app/adminmng/admin';

type Enrollment = {
  id: number;
  full_name: string;
  student_number: string;
  whatsapp_number: string;
  plan: string;
  referrer_id: string | null;
  is_paid: number;
  created_at: string;
};

export default function AdminDashboard() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState<Enrollment[] | null>(null);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await fetchAdminData(pin);

    if (result.success && result.data) {
      setStudents(result.data as Enrollment[]);
    } else {
      setError(result.message || "Authentication failed");
      setPin('');
    }
    
    setIsLoading(false);
  };

  // ==========================================
  // REAL-TIME OPTIMISTIC UI TOGGLE
  // ==========================================
  const handleTogglePayment = async (id: number, currentStatus: number) => {
    // 1. Calculate the target state (0 or 1 for SQLite)
    const newStatus = currentStatus === 1 ? 0 : 1;

    // 2. OPTIMISTIC UPDATE: Instantly flip the UI state so it feels real-time
    setStudents((prev) => 
      prev ? prev.map(student => 
        student.id === id ? { ...student, is_paid: newStatus } : student
      ) : null
    );

    // 3. Fire the database update in the background
    const result = await togglePaymentStatus(id, currentStatus, pin);

    // 4. ROLLBACK: If SQLite fails, revert the UI and alert you
    if (!result.success) {
      setStudents((prev) => 
        prev ? prev.map(student => 
          student.id === id ? { ...student, is_paid: currentStatus } : student
        ) : null
      );
      alert("Database sync failed. Reverting status.");
    }
  };

  // ==========================================
  // VIEW 1: THE DATA DASHBOARD (Authenticated)
  // ==========================================
  if (students !== null) {
    // Derived CRM Metrics (These will now recalculate instantly on button click!)
    const totalLeads = students.length;
    const paidStudents = students.filter(s => s.is_paid).length;
    const pendingStudents = totalLeads - paidStudents;
    const grossRevenue = paidStudents * 500;
    const bountiesToPay = students.filter(s => s.is_paid && s.referrer_id).length;
    const totalBountyCost = bountiesToPay * 110;

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Bootcamp Command Center</h1>
              <p className="text-sm font-medium text-slate-500 mt-1">Manage enrollments, track revenue, and clear bounties.</p>
            </div>
            <button 
              onClick={() => setStudents(null)} 
              className="text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              🔒 Lock Dashboard
            </button>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Total Pipeline</span>
              <span className="text-3xl font-black text-slate-900">{totalLeads}</span>
              <span className="text-xs font-semibold text-amber-600 mt-2">{pendingStudents} awaiting payment</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Secured Seats</span>
              <span className="text-3xl font-black text-emerald-600">{paidStudents}</span>
              <span className="text-xs font-semibold text-emerald-600 mt-2">Active cohort members</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Gross Revenue</span>
              <span className="text-3xl font-black text-slate-900">R{grossRevenue.toLocaleString()}</span>
              <span className="text-xs font-semibold text-slate-500 mt-2">Based on cleared R500 EFTs</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Bounties Owed</span>
              <span className="text-3xl font-black text-red-600">{bountiesToPay}</span>
              <span className="text-xs font-semibold text-red-500 mt-2">Total liability: R{totalBountyCost.toLocaleString()}</span>
            </div>
          </div>

          {/* The Card-Based CRM List (Your Locked-In Component) */}
          <div className="space-y-6 mt-8">
            {students.length === 0 ? (
              <div className="bg-white border-2 border-slate-900 rounded-xl p-12 text-center shadow-[6px_6px_0px_#0f172a]">
                <p className="text-slate-500 font-bold text-lg">
                  No enrollments yet. Drop the link in the group chats!
                </p>
              </div>
            ) : (
              students.map((student) => (
                <div 
                  key={student.id} 
                  className="bg-white border-2 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#0f172a] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0f172a] transition-all duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-start lg:items-center">
                    
                    {/* 1. Payment Toggle Column */}
                    <div className="lg:col-span-1 border-b-2 border-dashed border-slate-200 lg:border-none pb-4 lg:pb-0">
                      <button 
                        onClick={() => handleTogglePayment(student.id, student.is_paid)}
                        className={`px-4 py-3 lg:py-2 rounded text-xs font-black uppercase tracking-widest border-2 transition-transform active:scale-95 w-full lg:w-auto ${
                          student.is_paid 
                            ? 'bg-emerald-500 border-emerald-700 text-white shadow-[2px_2px_0px_#047857]' 
                            : 'bg-white border-slate-900 text-slate-900 hover:bg-amber-100 shadow-[2px_2px_0px_#0f172a]'
                        }`}
                      >
                        {student.is_paid ? '🟢 PAID' : '🟡 PENDING'}
                      </button>
                    </div>
                    
                    {/* 2. Student Info */}
                    <div className="lg:col-span-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block lg:hidden">Student</p>
                      <p className="font-black text-slate-900 text-lg leading-tight">{student.full_name}</p>
                      <p className="text-sm text-slate-500 font-bold mt-1">{student.student_number}</p>
                    </div>
                    
                    {/* 3. Contact */}
                    <div className="lg:col-span-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block lg:hidden">WhatsApp</p>
                      <p className="text-base text-slate-700 font-bold">{student.whatsapp_number}</p>
                    </div>
                    
                    {/* 4. Bounty Logic */}
                    <div className="lg:col-span-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block lg:hidden">Referral</p>
                      {student.referrer_id ? (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm font-bold text-slate-900">Ref: {student.referrer_id}</span>
                          {student.is_paid ? (
                            <span className="text-[11px] font-black uppercase bg-red-600 text-white px-2 py-1 rounded inline-block w-max animate-pulse shadow-sm">
                              🚨 PAY R110
                            </span>
                          ) : (
                            <span className="text-[11px] font-black uppercase bg-slate-200 text-slate-500 px-2 py-1 rounded inline-block w-max">
                              ⏳ Pending EFT
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-slate-300 font-bold text-lg block">-</span>
                      )}
                    </div>

                    {/* 5. Plan */}
                    <div className="lg:col-span-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block lg:hidden">Plan Details</p>
                      <p className="text-sm text-slate-700 font-bold leading-snug">
                        {student.plan}
                      </p>
                    </div>

                    {/* 6. Date */}
                    <div className="lg:col-span-1 lg:text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block lg:hidden">Timestamp</p>
                      <p className="text-slate-500 text-sm font-semibold">
                        {new Date(student.created_at).toLocaleString('en-ZA', { 
                          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
                        })}
                      </p>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: THE LOCK SCREEN (Unauthenticated)
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 border border-slate-200 rounded-2xl shadow-xl text-center">
        <div className="w-16 h-16 bg-slate-900 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-slate-900/20">
          <span className="text-2xl text-white">⚡</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">System Locked</h2>
        <p className="text-sm font-medium text-slate-500 mb-8">Enter your master PIN to access the command center.</p>
        
        {error && (
          <div className="mb-6 text-sm text-red-600 font-bold bg-red-50 p-3 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="••••••"
            className="w-full px-4 py-4 mb-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none font-black text-center tracking-[0.5em] text-2xl transition-colors"
            required
            autoFocus
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 text-white font-extrabold px-6 py-4 rounded-xl hover:bg-slate-800 transition-all tracking-wide shadow-md hover:shadow-lg disabled:opacity-70"
          >
            {isLoading ? 'Decrypting...' : 'Unlock Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
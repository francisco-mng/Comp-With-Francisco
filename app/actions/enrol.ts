'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function submitEnrollment(formData: FormData) {
  try {
    // 1. Extract and sanitize data
    const fullName = formData.get('fullName')?.toString().trim() || '';
    const studentNumber = formData.get('studentNumber')?.toString().trim() || '';
    const whatsappNumber = formData.get('whatsappNumber')?.toString().replace(/\s+/g, '') || ''; // Strips spaces
    const plan = formData.get('plan')?.toString() || '';
    const referrerId = formData.get('referrerId')?.toString().trim() || '';

    // 2. Basic Empty Field Validation
    if (!fullName || !studentNumber || !whatsappNumber) {
      return { success: false, message: "Please fill out all required fields." };
    }

    // 3. ANTI-FRAUD: Self-Referral Block
    if (studentNumber === referrerId) {
      return { success: false, message: "Nice try! You cannot refer yourself. 😉" };
    }

    // 4. ANTI-FRAUD: Duplicate Entry Block (Prevents hijacking)
    const existingStudent = db.prepare('SELECT id FROM enrollments WHERE student_number = ?').get(studentNumber);
    if (existingStudent) {
      return { success: false, message: "This student number is already locked in!" };
    }

    // 5. Secure Database Insertion
    const stmt = db.prepare(`
      INSERT INTO enrollments (full_name, student_number, whatsapp_number, plan, referrer_id)
      VALUES (?, ?, ?, ?, ?)
    `);

    stmt.run(fullName, studentNumber, whatsappNumber, plan, referrerId || null);

    return { success: true, message: "Enrollment secured." };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to save enrollment. Please try again." };
  }
}

// ... (keep your togglePaymentStatus and toggleBountyStatus functions here)
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


    //Stop right there, hacker! Let's validate this data before it even hits the database.
    const validPlans = ["Supplemental Exam Intake (R500)", "Standard Plan (R250)"];
    if (!validPlans.includes(plan)) {
      return { success: false, message: "Invalid plan selected. Stop hacking the form! 😉" };
    }


    // 2. Basic Empty Field Validation
    if (!fullName || !studentNumber || !whatsappNumber) {
      return { success: false, message: "Please fill out all required fields." };
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

    // NEW: Check if WhatsApp Number exists
    const existingWhatsApp = db.prepare('SELECT id FROM enrollments WHERE whatsapp_number = ?').get(whatsappNumber);
    if (existingWhatsApp) {
      return { success: false, message: "This WhatsApp number is already registered to another student!" };
    }

    stmt.run(fullName, studentNumber, whatsappNumber, plan, null);

    return { success: true, message: "Enrollment secured." };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to save enrollment. Please try again." };
  }
}

// ... (keep your togglePaymentStatus and toggleBountyStatus functions here)
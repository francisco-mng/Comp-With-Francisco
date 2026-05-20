'use server';

import db from '@/lib/db';

export default async function submitEnrollment(formData: FormData) {
  try {
    // Extract data from the form payload
    const fullName = formData.get('fullName')?.toString() || '';
    const studentNumber = formData.get('studentNumber')?.toString() || '';
    const whatsappNumber = formData.get('whatsappNumber')?.toString() || '';
    const plan = formData.get('plan')?.toString() || '';
    const referrerId = formData.get('referrerId')?.toString() || '';

    // Basic server-side validation
    if (!fullName || !studentNumber || !whatsappNumber) {
      return { success: false, message: "Missing required fields." };
    }

    // Prepare the parameterised statement with whatsapp_number
    const stmt = db.prepare(`
      INSERT INTO enrollments (full_name, student_number, whatsapp_number, plan, referrer_id)
      VALUES (?, ?, ?, ?, ?)
    `);

    // Execute the statement securely
    stmt.run(fullName, studentNumber, whatsappNumber, plan, referrerId);

    return { success: true, message: "Enrollment secured." };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to save enrollment." };
  }
}
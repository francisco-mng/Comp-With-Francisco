'use server';

import db from '@/lib/db';

export default async function fetchAdminData(submittedPin: string) {
  try {
    // 1. Pull the secret directly from the Node.js environment
    const secretPin = process.env.ADMIN_PIN;

    // Safety check in case you forget to create the .env.local file
    if (!secretPin) {
      console.error("CRITICAL: ADMIN_PIN environment variable is missing.");
      return { success: false, message: "Server configuration error." };
    }

    // 2. Validate the PIN
    if (submittedPin.trim() !== secretPin.trim()) {
      return { success: false, message: "Access Denied: Invalid PIN." };
    }

    // 3. PIN is valid. Fetch the leads safely.
    const stmt = db.prepare('SELECT * FROM enrollments ORDER BY created_at DESC');
    const enrollments = stmt.all();

    return { 
      success: true, 
      data: enrollments 
    };

  } catch (error) {
    console.error("Admin Auth Error:", error);
    return { success: false, message: "Database query failed." };
  }
}
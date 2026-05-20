'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const fetchAdminData = async (submittedPin: string) => {
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

// NEW ACTION: Toggle the is_paid status
export const togglePaymentStatus = async (id: number, currentStatus: number, submittedPin: string) => {
  try {
    const secretPin = process.env.ADMIN_PIN;
    if (!secretPin || submittedPin.trim() !== secretPin.trim()) {
      return { success: false, message: "Unauthorized." };
    }

    const newStatus = currentStatus === 1 ? 0 : 1;
    const stmt = db.prepare('UPDATE enrollments SET is_paid = ? WHERE id = ?');
    stmt.run(newStatus, id);
    
    // Force the dashboard to refresh its data
    // Note: This assumes the dashboard is using a 
    // client-side data fetching approach that respects revalidation
    revalidatePath('/adminMNG');
    
    return { success: true };
  } catch (error) {
    console.error("Update Error:", error);
    return { success: false };
  }
}

// NEW ACTION: Toggle the bounty_paid status
export const toggleBountyStatus = async (id: number, currentStatus: number, submittedPin: string) => {
  try {
    const secretPin = process.env.ADMIN_PIN;
    if (!secretPin || submittedPin.trim() !== secretPin.trim()) {
      return { success: false, message: "Unauthorized." };
    }

    const newStatus = currentStatus === 1 ? 0 : 1;
    const stmt = db.prepare('UPDATE enrollments SET bounty_paid = ? WHERE id = ?');
    stmt.run(newStatus, id);
    
    revalidatePath('/adminMNG');
    return { success: true };
  } catch (error) {
    console.error("Update Error:", error);
    return { success: false };
  }
}
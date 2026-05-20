import Database from 'better-sqlite3';
import path from 'path';

// This will create a file named 'bootcamp.db' in your project root
const dbPath = path.join(process.cwd(), 'bootcamp.db');
const db = new Database(dbPath);

// Initialize the table with the new whatsapp_number column instead of email
db.exec(`
  CREATE TABLE IF NOT EXISTS enrollments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    student_number TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    plan TEXT NOT NULL,
    referrer_id TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
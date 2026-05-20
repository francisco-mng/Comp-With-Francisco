import Database from 'better-sqlite3';
import path from 'path';

// Locate or create the bootcamp.db file
const dbPath = path.join(process.cwd(), 'bootcamp.db');
const db = new Database(dbPath);

// 1. Base Table Creation (Runs on completely fresh installs)
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

// 2. The Auto-Migration (Safely adds the missing column to your existing table)
try {
  db.exec(`ALTER TABLE enrollments ADD COLUMN is_paid INTEGER DEFAULT 0`);
  console.log("⚡ Migration successful: 'is_paid' column added to database.");
} catch (err: any) {
  // If the column already exists, SQLite throws an error. We safely catch and ignore it.
  if (!err.message.includes('duplicate column name')) {
    console.error("Database Migration Error:", err);
  }
}

export default db;
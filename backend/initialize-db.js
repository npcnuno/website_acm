
const sqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// Ensure the database directory exists
const dbDir = path.join(__dirname, 'db');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}

// Define the database file path
const dbPath = path.join(dbDir, 'dev.db');

// Connect to the SQLite database (creates the file if it doesn't exist)
const db = sqlite3(dbPath);
console.log(`SQLite database created at: ${dbPath}`);

// SQL queries to initialize the database
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );
`;

const insertDataSQL = `
  INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@example.com'),
  ('Bob', 'bob@example.com')
  ON CONFLICT DO NOTHING;
`;

// Execute the queries
try {
  db.exec(createTableSQL);
  console.log('Table `users` created or already exists.');

  db.exec(insertDataSQL);
  console.log('Sample data inserted into `users` table.');
} catch (error) {
  console.error('Error initializing the database:', error.message);
} finally {
  // Close the database connection
  db.close();
  console.log('Database connection closed.');
}


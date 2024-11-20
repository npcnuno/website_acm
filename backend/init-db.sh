#!/bin/bash

# Create a new SQLite database (if not already created)
sqlite3 /db/dev.db <<EOF
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES
    ('Alice', 'alice@example.com'),
    ('Bob', 'bob@example.com')
ON CONFLICT DO NOTHING;
EOF

echo "SQLite database initialized at /db/dev.db"

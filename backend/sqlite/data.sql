-- user table
CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('student', 'teacher', 'admin')),
  email TEXT UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- student table
CREATE TABLE IF NOT EXISTS student (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  birth_date DATE,
  grade TEXT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- teacher table
CREATE TABLE IF NOT EXISTS teacher (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  subject TEXT,
  hire_date DATE,
  salary REAL,
  phone_number TEXT,
  email TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- asset table
CREATE TABLE IF NOT EXISTS asset (
  id INTEGER PRIMARY KEY,
  name INTEGER NOT NULL UNIQUE,
  amount REAL NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
);

-- expense table
CREATE TABLE IF NOT EXISTS expense (
  id INTEGER PRIMARY KEY,
  name INTEGER NOT NULL UNIQUE,
  amount REAL NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
);

-- invoice table
CREATE TABLE IF NOT EXISTS invoice (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL UNIQUE,
  description TEXT NOT NULL,
  amount REAL NOT NULL,
  created_by INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES user(id)
);

-- grade table
CREATE TABLE IF NOT EXISTS grade (
  id INTEGER PRIMARY KEY,
  name INTEGER NOT NULL UNIQUE,
  teacher_id INTEGER NOT NULL,
  created_by INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (teacher_id) REFERENCES user(id),
  FOREIGN KEY (created_by) REFERENCES user(id)
);
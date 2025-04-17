const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// const db = new sqlite3.Database(path.resolve(__dirname, 'school_management_system.db'), (err) => {
//   if (err) return console.error(err.message);
//   console.log('Connected to SQLite database');
// });

// module.exports = db;


import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export async function getDb() {
  const db = await open({
    filename: path.join(__dirname, './sqlite/data.db'),
    driver: sqlite3.Database
  });
  return db;
}

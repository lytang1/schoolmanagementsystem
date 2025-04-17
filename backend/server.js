const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
// user controller
app.get('/user', (req, res) => {
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users(username TEXT, password TEXT, user_role TEXT)');
    // db.run('INSERT INTO greetings(message) VALUES(?)', ['Hello from SQLite!']);
    // db.get('SELECT message FROM greetings ORDER BY ROWID DESC LIMIT 1', (err, row) => {
    //   if (err) res.status(500).json({ error: err.message });
    //   else res.json({ message: row.message });
    // });
  });
});
app.post('/user', (req, res) => {
  const { username, password, userRole } = req.body;
  const query = 'INSERT INTO user (username, password, user_role) VALUES (?, ?, ?)';
  db.run(query, [username, password, userRole], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, teacher });
  });
});

app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { username, password, userRole } = req.body;
  const query = 'UPDATE user SET username = ?, password = ?, user_role = ? WHERE id = ?';
  db.run(query, [username, password, userRole, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ id, username, password, userRole });
  });
});

app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM user WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ success: true });
  });
});

// class controller
app.post('/classes', (req, res) => {
  const { name, teacher, monthlyFee } = req.body;
  const query = 'INSERT INTO classes (name, teacher, monthly_fee) VALUES (?, ?, ?)';
  db.run(query, [name, teacher, monthlyFee], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, teacher, monthlyFee });
  });
});

// Read all classes
app.get('/classes', (req, res) => {
  db.all('SELECT * FROM classes', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a class
app.put('/classes/:id', (req, res) => {
  const { id } = req.params;
  const { name, teacher, monthlyFee } = req.body;
  const query = 'UPDATE classes SET name = ?, teacher = ?, monthly_fee = ? WHERE id = ?';
  db.run(query, [name, teacher, monthlyFee, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ id, name, teacher, monthlyFee });
  });
});

// Delete a class
app.delete('/classes/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM classes WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ success: true });
  });
});

// expense controller start TODO
app.post('/expense', (req, res) => {
  const { name, amount, date, description, paymentType } = req.body;
  const query = 'INSERT INTO expense (name, amount, date, description, payment_type) VALUES (?, ?, ?, ?, ?)';
  db.run(query, [name, amount, date, description, paymentType], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, amount, date, description, paymentType});
  });
});

// Read all expenses
app.get('/classes', (req, res) => {
  db.all('SELECT * FROM expense', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a expense
app.put('/expense/:id', (req, res) => {
  const { id } = req.params;
  const { name, amount, date, description, paymentType } = req.body;
  const query = 'UPDATE expense SET name = ?, amount = ? , date = ?, description = ?, payment_type = ? WHERE id = ?';
  db.run(query, [name, amount, date, description, paymentType, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Expense not found' });
    res.json({ id, name, amount, date, description, paymentType });
  });
});

// Delete a expense
app.delete('/expense/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM expense WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Expese not found' });
    res.json({ success: true });
  });
});

// asset controller
app.post('/asset', (req, res) => {
  const { name, amount, date } = req.body;
  const query = 'INSERT INTO asset (name, amount, date) VALUES (?, ?, ?)';
  db.run(query, [name, amount, date], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, amount, date });
  });
});

// Read all assets
app.get('/asset', (req, res) => {
  db.all('SELECT * FROM asset', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a asset
app.put('/asset/:id', (req, res) => {
  const { id } = req.params;
  const { name, amount, date } = req.body;
  const query = 'UPDATE asset SET name = ?, amount = ? , date = ? WHERE id = ?';
  db.run(query, [name, amount, date, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Asset not found' });
    res.json({ id, name, amount, date });
  });
});

// Delete a aset
app.delete('/asset/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM asset WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ success: true });
  });
});

// invoice controller
app.post('/invoice', (req, res) => {
  const { description, amount, date, paymentType } = req.body;
  const invoiceNumber = `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}-sms`;
  const query = 'INSERT INTO invoice (description, amount, date, payment_type, invoice_number) VALUES (?, ?)';
  db.run(query, [description, amount, date, paymentType, invoiceNumber], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, description, amount, date, paymentType, invoiceNumber });
  });
});

// Read all invoice
app.get('/invoice', (req, res) => {
  db.all('SELECT * FROM invoice', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a invoice
app.put('/invoice/:id', (req, res) => {
  const { id } = req.params;
  const { description, amount, date, paymentType, invoiceNumber } = req.body;
  const query = 'UPDATE invoice SET description = ?, amount = ? , date = ?, payment_type = ? WHERE id = ?';
  db.run(query, [description, amount, date, paymentType id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Invoice not found' });
    res.json({ id, description, amount, date, paymentType, invoiceNumber });
  });
});

// Delete a invoice
app.delete('/invoice/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM invoice WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Invoice not found' });
    res.json({ success: true });
  });
});

// student controller
app.post('/student', (req, res) => {
  const { name, address, dob, classId, userId, phone } = req.body;
  const query = 'INSERT INTO student (name, address, dob, classId, userId, phone) VALUES (?, ?, ?, ?, ?, ?)';
  db.run(query, [name, address, dob, classId, userId, phone], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, address, dob, classId, userId, phone });
  });
});

// Read all students
app.get('/student', (req, res) => {
  db.all('SELECT * FROM student', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a student
app.put('/student/:id', (req, res) => {
  const { id } = req.params;
  const { name, address, dob, classId, userId, phone } = req.body;
  const query = 'UPDATE student SET name = ?, address = ?, dob = ?, classId = ?, userId = ?, phone = ? WHERE id = ?';
  db.run(query, [name, address, dob, classId, userId, phone, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ id, name, teacher });
  });
});

// Delete a class
app.delete('/student/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM stuent WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ success: true });
  });
});

// employee controller
app.post('/classes', (req, res) => {
  const { name, teacher } = req.body;
  const query = 'INSERT INTO classes (name, teacher) VALUES (?, ?)';
  db.run(query, [name, teacher], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, teacher });
  });
});

// Read all classes
app.get('/classes', (req, res) => {
  db.all('SELECT * FROM classes', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a class
app.put('/classes/:id', (req, res) => {
  const { id } = req.params;
  const { name, teacher } = req.body;
  const query = 'UPDATE classes SET name = ?, teacher = ? WHERE id = ?';
  db.run(query, [name, teacher, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ id, name, teacher });
  });
});

// Delete a class
app.delete('/classes/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM classes WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
    res.json({ success: true });
  });
});

// report controller
app.get('/reports/cash_flow', (req, res) => {
  // const { name, teacher } = req.body;
  // const query = 'INSERT INTO classes (name, teacher) VALUES (?, ?)';
  // db.run(query, [name, teacher], function (err) {
  //   if (err) return res.status(500).json({ error: err.message });
  //   res.json({ id: this.lastID, name, teacher });
  // });
});

// Read all classes
app.get('/reports/income_statement', (req, res) => {
  // db.all('SELECT * FROM classes', [], (err, rows) => {
  //   if (err) return res.status(500).json({ error: err.message });
  //   res.json(rows);
  // });
});

// Update a class
app.get('/reports/balance_sheet', (req, res) => {
  // const { id } = req.params;
  // const { name, teacher } = req.body;
  // const query = 'UPDATE classes SET name = ?, teacher = ? WHERE id = ?';
  // db.run(query, [name, teacher, id], function (err) {
  //   if (err) return res.status(500).json({ error: err.message });
  //   if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
  //   res.json({ id, name, teacher });
  // });
});

// Delete a class
app.get('/reports/expense_report', (req, res) => {
  // const { id } = req.params;
  // db.run('DELETE FROM classes WHERE id = ?', id, function (err) {
  //   if (err) return res.status(500).json({ error: err.message });
  //   if (this.changes === 0) return res.status(404).json({ error: 'Class not found' });
  //   res.json({ success: true });
  // });
});
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

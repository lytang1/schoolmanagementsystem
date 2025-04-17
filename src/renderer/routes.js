import React from 'react'


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Attendance = React.lazy(()=>import('./views/pages/attendance/AttendanceInfo'))
const ClassInfo = React.lazy(()=> import('./views/pages/class/ClassInfo'))
const Expense = React.lazy(()=> import('./views/pages/expense/ExpenseInfo'))
const ExchangeRate = React.lazy(() => import('./views/pages/setting/exchange-rate/ExchangeRate'))
const StudentInfo = React.lazy(() => import('./views/pages/student/StudentInfo'))

const routes = [
  { path: 'home', name: 'Home' },
  { path: 'students/list',  name: 'Student Information', element: StudentInfo },
  { path: 'class',  name: 'Class Information', element: ClassInfo },
  { path: 'expenses', name: 'Expense', element: Expense },
  { path: 'students/attendance',  name: 'Attendance', element: Attendance },
  { path: 'exchange_rate',  name: 'Exchange Rate', element: ExchangeRate },
  { path: 'dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes

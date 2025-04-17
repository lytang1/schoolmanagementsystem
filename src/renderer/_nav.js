import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSitemap,
  cilGroup,
  cibReadme,
  cilBriefcase,
  cilEducation,
  cilSettings,
  cilCalendar,
  cilClipboard,
  cilCash,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  {
    component: CNavItem,
    name: 'Class Management',
    to: '/class',
    icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Subject Management',
    to: '/theme/typography',
    icon: <CIcon icon={cibReadme} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Student Management',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Student Info',
        to: '/students/list',
      },
      {
        component: CNavItem,
        name: 'Attendance',
        to: '/students/attendance',
      },
    ]
  },
  {
    component: CNavItem,
    name: 'Staff Management',
    to: '/theme/typography',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Time Table',
    to: '/theme/typography',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Expense',
    to: '/expenses',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Report',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Balance Sheet',
        to: '/report/balance_sheet',
      },
      {
        component: CNavItem,
        name: 'Cash Flow',
        to: '/report/cash_flow',
      },
      {
        component: CNavItem,
        name: 'Income Statement',
        to: '/report/income_statement',
      },
      {
        component: CNavItem,
        name: 'Expense Report',
        to: '/report/expense_statement',
      },
    ]
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'General Settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Settings',
        to: '/setting',
      },
      {
        component: CNavItem,
        name: 'Exchange Rate',
        to: '/exchange_rate',
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav

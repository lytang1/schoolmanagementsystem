import React, { Suspense, useEffect } from "react"
import { BrowserRouter as Router,HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'
import { AppFooter, AppHeader, AppSidebar } from './components';
// import routes from './routes';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Attendance = React.lazy(()=>import('./views/pages/attendance/AttendanceInfo'))
const ClassInfo = React.lazy(()=> import('./views/pages/class/ClassInfo'))
const Expense = React.lazy(()=> import('./views/pages/expense/ExpenseInfo'))
const ExchangeRate = React.lazy(() => import('./views/pages/setting/exchange-rate/ExchangeRate'))
const StudentInfo = React.lazy(() => import('./views/pages/student/StudentInfo'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
          <AppHeader />
          <div className="body flex-grow-1">
            <Suspense fallback={<CSpinner color="primary" />}>
              {/*<Suspense fallback={<div className="pt-3 text-center"><CSpinner color="primary" variant="grow" /></div>}>*/}
              <Routes>
                <Route path="/" exact component={Dashboard} />
                {/*<Route path="/" element={<DefaultLayout />} />*/}
                <Route element={<Login />} />
                <Route index path="students/list" element={<StudentInfo />} />
                <Route path="class" element={<ClassInfo />} />
                <Route path="expenses" element={<Expense />} />
                <Route path="students/attendance" element={<Attendance />} />
                <Route path="exchange_rate" element={<ExchangeRate />} />
                {/*<Route path="dashboard" element={<Dashboard />} />*/}
                {/*<Route path="/" name="Home" element={<DefaultLayout />} />*/}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="404" element={<Page404 />} />
                <Route path="500" element={<Page500 />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Suspense>
          </div>
          <AppFooter />
        </div>
      </div>

    </HashRouter>

  )
}

export default App

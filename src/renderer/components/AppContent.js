import React, { Suspense } from 'react'
import { BrowserRouter as Router,Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Router>
        <Routes>
          {routes.map((route, idx) => {
            console.log("###### route index ",route.path)
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  // exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
        </Router>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)

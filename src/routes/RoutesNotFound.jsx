import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'

import React from 'react'

export default function RoutesNotFound({ children }) {

  return (
    <Routes>
      {children}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

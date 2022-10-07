import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

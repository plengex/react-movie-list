import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail, List } from '../pages'

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="detail/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

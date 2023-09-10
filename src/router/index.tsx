import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail, ErrorNotFound, List } from '../pages'

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="*" element={<ErrorNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

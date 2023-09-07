import { PropsWithChildren, ReactElement } from 'react'
import Navbar from '../../components/Navbar'

const LayoutDefault = (props: PropsWithChildren): ReactElement => {
  return (
    <>
      <Navbar />
      <div className="page">
        {props.children}
      </div>
    </>
  )
}

export default LayoutDefault
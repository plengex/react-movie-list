import { ReactElement } from 'react'
import LayoutDefault from '../../layouts/LayoutDefault'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'

const ErrorNotFound = (): ReactElement => {
  return (
    <LayoutDefault>
      <Container>
        <div className="flex justify-center items-center h-[50vh]">
          <div className="py-6 text-center">
            <h2 className="text-5xl mb-4">Page Not Found</h2>
            <h3 className="text-3xl">
              You seem lost.
              <Link className="underline ml-2" to="/">Back to Home</Link>
            </h3>
          </div>
        </div>
      </Container>
    </LayoutDefault>
  )
}

export default ErrorNotFound
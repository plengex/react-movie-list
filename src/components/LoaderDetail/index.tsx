import { ReactElement } from 'react'
import Backdrop from '../Backdrop'
import Container from '../Container'

const LoaderDetail = (): ReactElement => {
  return (
    <>
      <Backdrop image="">
        <div className="p-4 md:p-10">
          <Container>
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6 animate-pulse">
              <div className="overflow-hidden min-w-[300px] h-[450px] rounded-md flex-shrink-0 bg-gray-300" />
              <div className="py-6 w-full">
                <div className="mb-8">
                  <div className="w-[200px] h-[48px] bg-gray-300 rounded-md mb-2" />
                  <div className="w-[150px] h-[24px] bg-gray-300 rounded-md" />
                </div>
                <div className="w-[150px] h-[24px] bg-gray-300 rounded-md mb-6" />
                <div className="h-[24px] bg-gray-300 rounded-md mb-2" />
                <div className="w-[200px] h-[24px] bg-gray-300 rounded-md" />
              </div>
            </div>
          </Container>
        </div>
      </Backdrop>
    </>
  )
}

export default LoaderDetail
import { ReactElement, useEffect, useRef, useState } from 'react'
import Container from '../Container'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

const Navbar = (): ReactElement => {
  const ref                 = useRef<HTMLElement>(null)
  const [height, setHeight] = useState<number | undefined>()
  
  useEffect(() => {
    if (ref?.current) {
      const resizeObserver = new ResizeObserver(() => {
        setHeight(ref.current?.offsetHeight)
      })

      resizeObserver.observe(ref.current)
      
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.setProperty('padding-top', `${height}px`)
  
        return () => {
          document.body.style.removeProperty('padding-top')
          resizeObserver.disconnect()
        }
      }
    }
  }, [height])

  return (
    <nav
      className="bg-white px-4 py-2.5 fixed z-[1001] top-0 left-0 w-full shadow"
      ref={ref}>
      <Container>
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </Link>
          <h6 className="font-medium line-clamp-1">
            React Movie List
          </h6>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
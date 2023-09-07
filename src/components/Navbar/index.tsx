import { ReactElement, useEffect, useRef } from 'react'
import Container from '../Container'
import viteLogo from '/vite.svg'

const Navbar = (): ReactElement => {
  const ref = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const height = ref.current?.offsetHeight
    
    if (typeof document !== 'undefined' && document.body) {
      document.body.style.setProperty('padding-top', `${height}px`)

      return () => {
        document.body.style.removeProperty('padding-top')
      }
    }
  }, [])

  return (
    <nav
      className="bg-white px-4 py-2.5 fixed z-[1001] top-0 left-0 w-full shadow"
      ref={ref}>
      <Container>
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <h6 className="font-medium line-clamp-1">
            React Movie List
          </h6>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
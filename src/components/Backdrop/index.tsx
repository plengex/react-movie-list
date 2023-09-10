import { ReactElement, ReactNode } from 'react'

interface BackdropProps {
  image    : string,
  children?: ReactNode,
}

const Backdrop = (props: BackdropProps): ReactElement => {
  return (
    <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${props.image}')` }}>
      <div style={{ backgroundImage: 'linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)' }}>
        {props.children}
      </div>
    </div>
  )
}

export default Backdrop
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
  id          : number,
  title       : string,
  image       : string,
  release_date: string,
}

const Card = (props: CardProps): ReactElement => {
  return (
    <div className="w-[150px] max-w-[150px]">
      <div className="overflow-hidden rounded-md min-h-[225px] max-h-[225px]">
        <Link to={`/detail/${props.id}`}>
          <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w154${props.image}`} alt={props.title} />
        </Link>
      </div>
      <div className="pt-3 px-2 w-full">
        <h6 className="font-bold line-clamp-2">
          <Link to={`/detail/${props.id}`}>
            {props.title}
          </Link>
        </h6>
        <span className="">
          {props.release_date}
        </span>
      </div>
    </div>
  )
}

export default Card
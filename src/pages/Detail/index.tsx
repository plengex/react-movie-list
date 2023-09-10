import { ReactElement } from 'react'
import LayoutDefault from '../../layouts/LayoutDefault'
import Backdrop from '../../components/Backdrop'
import Container from '../../components/Container'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MovieDetail, MovieList, getMovieDetail, getMovieRecomendations } from '../../api/movie'
import { BaseError } from '../../api'
import moment  from 'moment'
import LoaderList from '../../components/LoaderList'
import Card from '../../components/Card'
import ErrorNotFound from '../ErrorNotFound'
import LoaderDetail from '../../components/LoaderDetail'

const Detail = (): ReactElement => {
  const { id } = useParams()

  const movie = useQuery<MovieDetail, BaseError>({
    queryKey: ['movies', id],
    queryFn : () => {
      return getMovieDetail(id ?? '')
        .then((response) => response.data)
        .catch((error) => Promise.reject(error))
    },
  })

  const recomendations = useQuery<MovieList, BaseError>({
    queryKey: ['recomendations', id],
    queryFn : () => {
      return getMovieRecomendations(id ?? '')
        .then((response) => response.data)
        .catch((error) => Promise.reject(error))
    }
  })

  if (movie.status === 'error') {
    return <ErrorNotFound />
  }

  return (
    <LayoutDefault>
      {
        movie.status === 'loading' ?
          (<LoaderDetail />) :
          <Backdrop image={movie.data.backdrop_path}>
            <div className="p-4 md:p-10">
              <Container>
                <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
                  <div className="overflow-hidden min-w-[300px] h-[450px] rounded-md flex-shrink-0">
                    <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`} alt={movie.data.title} />
                  </div>
                  <div className="py-6">
                    <div className="mb-4">
                      <h2 className="text-white text-5xl line-clamp-1">{movie.data.title} ({moment(movie.data.release_date).format('YYYY')})</h2>
                      <p className="text-white">{moment(movie.data.release_date).format('DD/MM/YYYY')}</p>
                    </div>
                    <h6 className="text-white font-medium mb-4">Overview</h6>
                    <p className="text-white">{movie.data.overview}</p>
                  </div>
                </div>
              </Container>
            </div>
          </Backdrop>
      }
      <Container>
        <div className="py-6">
          <h3 className="text-3xl mb-4">Recommendations</h3>
          <div className="flex gap-4 flex-wrap justify-center py-6">
            {
              recomendations.status === 'loading' ?
                (<LoaderList />) :
                recomendations.status === 'error' ?
                  <h4>Error: {recomendations.error.response?.data.status_message}</h4> :
                  recomendations.data?.results?.map((movie) => (
                    <Card
                      id={movie.id}
                      key={movie.id}
                      title={movie.title}
                      image={movie.poster_path}
                      release_date={movie.release_date} />
                  ))
            }
          </div>
        </div>
      </Container>
    </LayoutDefault>
  )
}

export default Detail
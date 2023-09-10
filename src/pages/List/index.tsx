import { ReactElement, useState } from 'react'
import LayoutDefault from '../../layouts/LayoutDefault'
import Container from '../../components/Container'
import Card from '../../components/Card'
import { useInfiniteQuery } from '@tanstack/react-query'
import LoaderList from '../../components/LoaderList'
import type { BaseError, BaseRequestConfig } from '../../api'
import { MovieList, getMoviesList } from '../../api/movie'

const List = (): ReactElement => {
  const [keyword, setKeyword] = useState<string>('')

  const { status, error, data, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<MovieList, BaseError>({
    queryKey        : ['movies'],
    getNextPageParam: (prevData) => prevData.page + 1,
    queryFn         : ({ pageParam = 1 }) => {
      const config: BaseRequestConfig = {
        params: {
          page : pageParam,
        },
      }

      return getMoviesList(config)
        .then((response) => response.data)
        .catch((error) => Promise.reject(error))
    },
  })

  return (
    <LayoutDefault>
      <Container>
        <div className="flex items-center h-[300px] bg-blue-100">
          <div className="">
            <h2 className="text-5xl">Welcome.</h2>
            <h3 className="text-3xl">Millions of movies, TV shows and people to discover. Explore now.</h3>
            <input type="text" placeholder='Search for a movie' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <button onClick={() => refetch()}>cari</button>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center py-6">
          {
            status === 'loading' ?
              (<LoaderList />) :
              status === 'error' ?
                <h4>Error: {error.response?.data.status_message}</h4> :
                data?.pages.map((data) => data.results).flat()?.map((movie) => (
                  <Card
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    image={movie.poster_path}
                    release_date={movie.release_date} />
                ))
          }

          {isFetchingNextPage && <LoaderList />}
        </div>

        {hasNextPage && (
          <div className="text-center p-4">
            <button
              className="p-2.5 shadow"
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}>
              Load more..
            </button>
          </div>
        )}
      </Container>
    </LayoutDefault>
  )
}

export default List
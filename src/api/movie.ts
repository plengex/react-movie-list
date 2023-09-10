import { $api, BaseRequestConfig, BaseResponse } from '.'

export interface MovieList {
  page         : number,
  results      : Movie[]
  total_pages  : number
  total_results: number,
}

export interface Movie {
  adult            : boolean,
  backdrop_path    : string,
  genre_ids        : number[],
  id               : number,
  original_language: string,
  original_title   : string,
  overview         : string,
  popularity       : number,
  poster_path      : string,
  release_date     : string,
  title            : string,
  video            : boolean,
  vote_average     : number,
  vote_count       : number,
}

export interface MovieDetail {
  adult                : boolean,
  backdrop_path        : string,
  belongs_to_collection: null,
  budget               : number,
  genres               : Genre[],
  homepage             : string,
  id                   : number,
  imdb_id              : string,
  original_language    : string,
  original_title       : string,
  overview             : string,
  popularity           : number,
  poster_path          : string,
  production_companies : Company[],
  production_countries : Country[],
  release_date         : string,
  revenue              : number,
  runtime              : number,
  spoken_languages     : Language[],
  status               : string,
  tagline              : string,
  title                : string,
  video                : boolean,
  vote_average         : number,
  vote_count           : number,
}

interface Genre {
  id  : number,
  name: string
}

interface Company {
  id            : number,
  logo_path     : string,
  name          : string,
  origin_country: string
}

interface Country {
  iso_3166_1: string,
  name      : string,
}

interface Language {
  english_name: string,
  iso_639_1   : string,
  name        : string
}

export const getMoviesList = (config?: BaseRequestConfig): BaseResponse<MovieList> => {
  return $api.get('/discover/movie', config)
}

export const getMovieDetail = (id: number | string, config?: BaseRequestConfig): BaseResponse<MovieDetail> => {
  return $api.get(`/movie/${id}`, config)
}

export const getMovieRecomendations = (id: number | string, config?: BaseRequestConfig): BaseResponse<MovieList> => {
  return $api.get(`/movie/${id}/recommendations`, config)
}

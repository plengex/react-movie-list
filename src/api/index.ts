import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface Error {
  status_code   : number,
  status_message: string,
  success       : boolean,
}

export type BaseError = AxiosError<Error>

export type BaseResponse<T> = Promise<AxiosResponse<T>>

export type BaseRequestConfig = AxiosRequestConfig

export const $api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  },
})

import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

type Response<D> = {
  data: {} | D;
  error: null | Error;
}

export type HookResponse<D> = [D | {}, Error | null]

export default function useAxios<D>(url: string, options?: AxiosRequestConfig): HookResponse<D> {
  const [data, setData] = useState<Response<D>['data']>({})
  const [error, setError] = useState<Response<D>['error']>(null)

  useEffect(() => {
    (async () => {
      await axios.get(url, options)
        .then(async ({ data }) => {
          setData(data)
          setError(null)

          return { data, error: null }
        })
        .catch((error) => {
          setData({})
          setError(error)
  
          return { data: {}, error }
        })
    })()
  }, [])

  return [data, error]
}

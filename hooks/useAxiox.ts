import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

type Response<D> = {
  data: {} | D;
  error: null | Error;
  loading: boolean
}

export type HookResponse<D> = [D | {}, Error | null, boolean]

export default function useAxios<D>(url: string, options?: AxiosRequestConfig): HookResponse<D> {
  const [data, setData] = useState<Response<D>['data']>({})
  const [error, setError] = useState<Response<D>['error']>(null)
  const [loading, setLoading] = useState<Response<D>['loading']>(false)
  
  useEffect(() => {
    setLoading(true);

    (async () => {
      await axios.get(url, options)
        .then(async ({ data }) => {
          setData(data)
          setError(null)
          setLoading(false)

          return { data, error: null }
        })
        .catch((error) => {
          setData({})
          setError(error)
          setLoading(false)

          return { data: {}, error }
        })
    })()
  }, [])

  return [data, error, loading]
}

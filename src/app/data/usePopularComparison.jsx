import useSWR from 'swr';
const { baseURL } = require("../config")

export default function usePopularComparison () {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR(`${baseURL}/api/frontend/getPopularComparisonProducts`, fetcher,{
        revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
      })
   
    return {
      popularcomparisondata: data,
      isLoading,
      isError: error
    }
  }
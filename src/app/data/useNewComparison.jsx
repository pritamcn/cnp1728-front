import useSWR from 'swr';
const { baseURL } = require("../config")

export default function useNewComparison () {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR(`${baseURL}/api/frontend/getNewComparisonProducts`, fetcher,{
        revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
      })
   
    return {
      newcomparisondata: data,
      isLoading,
      isError: error
    }
  }
import useSWR from 'swr';
const { baseURL } = require("../config")

export default function useFeaturedComparison (id) {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading} = useSWR(`${baseURL}/api/frontend/getTopParentAllLevelStructure/${id}`, fetcher,{
        revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
      })
    return {
      featureddata: data,
      isLoading,
      isError: error,
    }
  }
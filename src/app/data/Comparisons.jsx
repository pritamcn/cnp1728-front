import { baseURL } from "../config";

export async function fetchComparisons(value) {
    const res = await fetch(`${baseURL}/api/frontend/getComparisonData/${value}`,{ next: { revalidate: 10 } });
    const data = await res.json();
    return data;
  }
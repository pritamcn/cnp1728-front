import { baseURL } from "../config";
export async function fetchTopCategories() {
    const res = await fetch(`${baseURL}/api/frontend/getAllTopCategories`,{ next: { revalidate: 10 } });
    const data = await res.json();
    return data;
  }
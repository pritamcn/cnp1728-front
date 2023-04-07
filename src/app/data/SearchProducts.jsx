import { baseURL } from "../config";

export async function fetchProductsBySearch(value) {
    const res = await fetch(`${baseURL}/api/frontend/getSearchResult?searchKey=${value}`,{ cache: "no-store" });
    const data = await res.json();
    return data;
  }
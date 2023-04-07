import { baseURL } from "../config";

export async function fetchProductDetails(value) {
    const res = await fetch(`${baseURL}/api/frontend/getProductData/${value}`,{ next: { revalidate: 10 } });
    const data = await res.json();
    return data;
  }
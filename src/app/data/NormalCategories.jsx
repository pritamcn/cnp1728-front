import { baseURL } from "../config";

export async function fetchNormalCategories(value) {
    const res = await fetch(`${baseURL}/api/frontend/getNormalCategoriesFromTopParentId/${value}`,{ next: { revalidate: 10 } });
    const data = await res.json();
    return data;
  }
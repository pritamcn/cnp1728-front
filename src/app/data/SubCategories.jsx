import { baseURL } from "../config";

export async function fetchSubCategories(value) {
    const res = await fetch(`${baseURL}/api/frontend/getSubcategoriesFromNormalCategoryId/${value}`,{ next: { revalidate: 10 } });
    const data = await res.json();
    return data;
  }
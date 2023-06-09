import Header from "@/app/Common/Header"
import NewComparison from "@/app/Common/NewComparison";
import NormalCategoriesbar from "@/app/Common/NormalCategoriesbar"
import { fetchComparisons } from "@/app/data/Comparisons";

export const metadata = {
  title: 'AM Relatix Sub Categories',
  description: 'Generated by create next app',
}
export async function getdata(value) {
  const data = await fetchComparisons(value);
  return {
    data,
  };
}
export default async function SubCategoriesLayout({ children,params}) {
  const { data } = await getdata(params.slug);
  let length =data?.normalCategoriesList?.length + data?.level3CategoriesList?.length
  return (
      <div>
        <Header params={data}/>
        <NormalCategoriesbar value={data?.normalCategoriesList} level3Categories={data?.level3CategoriesList}
        length={length}
        />
        {children}
        <NewComparison/>
      </div>
  )
}

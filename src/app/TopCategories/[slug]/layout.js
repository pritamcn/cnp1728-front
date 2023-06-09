import Header from "@/app/Common/Header"
import NewComparison from "@/app/Common/NewComparison";
import { fetchNormalCategories } from "@/app/data/NormalCategories";

export const metadata = {
  title: 'AM Relatix Top Categories',
  description: 'Generated by create next app',
}
export async function getdata(value) {
  const data = await fetchNormalCategories(value);
  return {
    data,
  };
}
export default async function TopCategoriesLayout({ children,params }) {
  const { data } = await getdata(params.slug);
  return (
      <div>
        <Header params={data}/>
        {children}
        <NewComparison/>
      </div>
  )
}

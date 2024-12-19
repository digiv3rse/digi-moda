import CategoryPost from "./default";
import { getPostsByCategory } from "@/lib/sanity/client";


export default async function PostByCategory({ params }) {
  const category = await getPostsByCategory(params.slug);
  return <CategoryPost category={category.post} />;
}

export const revalidate = 60;
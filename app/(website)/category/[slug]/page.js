import CategoryPost from "./default";
import { getPostsByCategory } from "@/lib/sanity/client";


export default async function PostByCategory({ params }) {
  const post = await getPostsByCategory(params.slug);
  return <CategoryPost category={category} />;
}

export const revalidate = 60;
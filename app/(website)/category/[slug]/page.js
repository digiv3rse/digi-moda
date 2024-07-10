import PostCategory from "./default";

import { getAllCategories, getPostBySlug, getPostsByCategory} from "@/lib/sanity/client";

//  
export async function generateStaticParams() {
  return await getAllCategories();
}

export async function generateMetadata({ params }) {
  const category = await getPostsByCategory(params.slug);
  return { title: category.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostsByCategory(params.slug);
  return <PostPage post={post} />;
}

export const revalidate = 60;

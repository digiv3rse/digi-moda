import AuthorPage from "./default";

import { getAllAuthorsSlugs, getAuthorPostsBySlug, getAuthorBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllAuthorsSlugs();
}

export async function generateMetadata({ params }) {
  const author = await getAuthorBySlug(params.slug);
  return { name: author.name };
}

export default async function AuthorDefault({ params }) {
  const author = await getAuthorBySlug(params.slug);
  const posts = await getAuthorPostsBySlug(params.slug);
  return <AuthorPage author={author} posts={posts}/>;
}

// export const revalidate = 60;

import AuthorPage from "./default";
import { getAuthorBySlug, getAllAuthorsSlugs} from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllAuthorsSlugs();
}

export async function generateMetadata({ params }) {
  const author = await getAuthorBySlug(params.slug);
  return { name: author.name };
}

export default async function PostDefault({ params }) {
  const author = await getAuthorBySlug(params.slug);
  return <AuthorPage author={author} />;
}

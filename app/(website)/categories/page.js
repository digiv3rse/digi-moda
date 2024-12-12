import Category from "./default";
import { getTopCategories } from "@/lib/sanity/client";

export default async function CategoriesPage() {
    const category = await getTopCategories();
    return <Category posts={category.posts} />;
}
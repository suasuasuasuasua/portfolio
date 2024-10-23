import { BlogPosts } from "@/components/blog/posts";

export const metadata = {
  title: "blog",
  description: "read my blog",
};

export default function Page() {
  return (
    <div className="mx-auto w-11/12">
      <BlogPosts />
    </div>
  );
}

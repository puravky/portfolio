import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "blog",
  description: "blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <style>
        {`
          @media (min-width: 640px) and (max-width: 767px) {
            .custom-margin {
              padding-right: 20px;
            }
          }
        `}
      </style>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">blog</h1>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="flex justify-between">
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 bg-zinc-100 dark:bg-zinc-900 rounded-md py-5">
                  <p className="text-black dark:text-white tracking-tight ml-5">
                    {post.metadata.title}
                  </p>
                  <p
                    className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm ml-5 custom-margin
                  md:pr-5 lg:pr-5"
                  >
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

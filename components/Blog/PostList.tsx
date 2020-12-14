import Link from 'next/link'

interface Post {
  id: number
  slug: string
  title: string
  excerpt?: string
  updated_at: string
}

const posts: Post[] = [
  {
    id: 1,
    slug: 'tailwind-css-first-impressions',
    title: 'TailwindCSS First Impressions',
    excerpt: 'My pros and cons of the Tailwind framework after one week.',
    updated_at: 'one week ago',
  },
  {
    id: 1,
    slug: 'product-design-portfolios',
    title: 'Product Design Portfolios',
    excerpt: 'A living list of useful and inspiring product design portfolios.',
    updated_at: '2 weeks ago',
  },
]

export const PostList = () => {
  return (
    <div className="flex flex-col space-y-5 px-4">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

interface PostProps {
  post: Post
}

const PostItem = ({ post }: PostProps) => (
  <div className="flex flex-col space-y-1" key={post.id}>
    <Link href={`/posts/${post.slug}`} passHref>
      <a className="text-blue-600 dark:text-white">{post.title}</a>
    </Link>
    {post.excerpt && <p className="clamp-2">{post.excerpt}</p>}
    <p className="p-small text-gray-100">Updated {post.updated_at}</p>
  </div>
)
